from __future__ import absolute_import, print_function, division, unicode_literals

import os
import sys
import webbrowser
import subprocess
import logging
import multiprocessing
import _thread
import threading
from multiprocessing import Process, set_start_method, freeze_support



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

    child = subprocess.Popen(['release-builds/iDigBio Media Ingestion Tool-win32-x64/iDigBio Media Ingestion Tool.exe'])
       
    if dbg:
        # logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)
        app.run(debug=True) # debug option is not covered
    else:
        app.run()

    child.kill()
    

if __name__ == '__main__':
    main()
