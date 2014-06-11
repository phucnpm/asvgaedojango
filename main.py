import os,sys
os.environ['DJANGO_SETTINGS_MODULE'] = 'asvgaedojango.settings'

# Force Django to reload its settings.
from django.conf import settings
settings._target = None

import django.core.handlers.wsgi
import django.core.signals
import django.db
import django.dispatch

# Add apps folder to PYTHONPATH
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'apps').replace('\\','/'),)


# Log errors.
#import logging
#def log_exception(*args, **kwds):
#    logging.exception('Exception in request:')
#
#django.dispatch.Signal.connect(
#    django.core.signals.got_request_exception, log_exception)

# Unregister the rollback event handler.
django.dispatch.Signal.disconnect(
    django.core.signals.got_request_exception,
    django.db._rollback_on_exception)

app = django.core.handlers.wsgi.WSGIHandler()
