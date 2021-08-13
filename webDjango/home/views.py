from django.shortcuts import render
from .form import registryform

# Create your views here.

def registry(request):
    form = registryform()
    if request.method =='POST':
        form = registryform(request.POST)
        if form.is_valid():
            form.save()
            return render(request,'registry.html',{'form':form})
    return render(request,'registry.html',{'form':form})