from django.urls import path
from .import views

app_name = 'log_reg_home'
urlpatterns = [
    path('',views.index, name='index'),
    path('login',views.mylogin, name='mylogin'),
    path('registry',views.registry, name='registry'),
    path('logout',views.logout, name='logout')
 ]
