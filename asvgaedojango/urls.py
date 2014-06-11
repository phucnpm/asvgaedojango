from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'asvgaedojango.views.home', name='home'),
    # url(r'^asvgaedojango/', include('asvgaedojango.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),

    url(r'^dojango/', include('apps.dojango.urls')),
    url(r'^demo/', 'demo.views.demo', name='demo'),
    url(r'^demo_modern/', 'demo.views.demo_modern', name='demo_modern'),
    url(r'^mobile', 'demo.views.demo_mobile', name='mobile'),
    url(r'^$', 'demo.views.index', name='index'),
)
