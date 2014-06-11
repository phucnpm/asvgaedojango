# Create your views here.

from django.shortcuts import render_to_response

def index(request):
    return render_to_response('demo/index.html')

def demo(request):
    return render_to_response('demo/demo.html')

def demo_modern(request):
    return render_to_response('demo/demo_modern.html')

def demo_mobile(request):
    return render_to_response('demo/mobile.html')