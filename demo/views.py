# Create your views here.

from django.shortcuts import render_to_response

def demo(request):
    return render_to_response('demo/demo.html')