from django import forms
import re
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist

class registryform(forms.Form):
    username = forms.CharField(label='Tên tài khoản', max_length=30)
    email = forms.EmailField(label='Email')
    password = forms.CharField(label='Mật khẩu',widget=forms.PasswordInput)
    repassword = forms.CharField(label='Mật khẩu',widget=forms.PasswordInput)

# kiểm tra 2 trường mật khẩu có giống nhau khônng
    def clean_password(self):
        if 'password' in self.cleaned_data:
            password = self.cleaned_data['password']
            repassword = self.cleaned_data['password']
            if password == repassword and password:
                return repassword
        raise forms.ValidationError('mật khẩu không hợp lệ')

    def clean_username(self):
        username = self.cleaned_data['username']
        if not re.search('',username):
            raise forms.ValidationError('tài khoản k được để trống')
        try:
            User.objects.get(username=username)
        except ObjectDoesNotExist:
            return username 
        raise forms.ValidationError('tài khoản đã tồn tại')

    def save(self):
        User.objects.create_user(username = self.cleaned_data['username'],email = self.cleaned_data['email'],password = self.cleaned_data['password'])