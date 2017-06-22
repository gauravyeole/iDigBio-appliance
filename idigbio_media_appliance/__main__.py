from __future__ import absolute_import, print_function, division, unicode_literals

import os
import sys
import webbrowser
import subprocess
import logging
import multiprocessing
import thread
from multiprocessing import Process

def run_server(app):
    app.run()

def launchChild(child, server):
    print("Thread started...")
    osdata, err = child.communicate()
    if err is None:
        server.terminate()



def main():
    # This probably means that OSX will only work on python 3.5 and higher
    if sys.version_info >= (3,4):
        multiprocessing.set_start_method('spawn')

    dbg = "True" == os.getenv("DEBUG", "False")

    try:
        subprocess.run(["conda", "install", "-y", "-c", "idigbio", "idigbio-media-appliance"])
    except:
        logging.exception("Update Error")

    from .app import init_routes, create_or_update_db, app
    init_routes()
    create_or_update_db()

    server = Process(target=run_server,args=(app,))

    #webbrowser.open("http://localhost:5000")
    child = subprocess.Popen(['electron','.'])

    try:
        thread.start_new_thread( launchChild, (child,server,) )
    except:
        print ("Error: unable to start thread")

    if dbg:
        # logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)
        server.start() # debug option is not covered
    else:
        server.start()
    

if __name__ == '__main__':
    main()