from django.contrib import auth
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib.auth import login,authenticate
from django.contrib.auth.models import User
# Create your views here.

def index(request):
    return render(request,'index.html')

def mylogin(request):
    if request.method == 'POST':
        #lấy user and pass
        username = request.POST.get('username')
        password = request.POST.get('password')
        #kt xem có trong db không
        user = authenticate(username=username,password=password)
        if user is not None : # nếu tìm thấy user có username và password đã nhập
            if user.is_active: #tài khoản còn hoạt động không
                login(request,user)
                return render(request,"log_success.html")
            else:
                return render(request,"index.html")
        else:
            return render(request,"index.html")
    return render(request,"index.html")

# def registry(request):
#     if request.method == 'POST':
#         #lấy user and pass
#         username = request.POST.get('user_reg')
#         password = request.POST.get('password_reg')
#         #kt xem có trong db không
#         if User.objects.get(username): # nếu tìm thấy user đã nhập
#             return render(request,"reg_err.html")
#         else:
#             User.objects.create_user(username = username,password = password)
#             user = authenticate(username = username,password=password)
#             login(request,user)
#             return render(request,"test.html")    
#     return render(request,"index.html")

def registry(request):
    if request.method == 'POST':
        #lấy user and pass
        username = request.POST.get('user_reg')
        password = request.POST.get('password_reg')
        repassword = request.POST.get('repassword')
        new_user = User()
        new_user.username = username
        new_user.set_password(password)
        new_user.save()
        user = authenticate(username = username,password=password)
        login(request,user)
        return render(request,"log_success.html")
    return render(request,"index.html")

def logout(request):
    return render(request,'index.html')