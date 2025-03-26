"""
URL configuration for calculusquest project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from learning import views

STATIC_URL = "static/"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('limit/summary/', views.limit_summary, name='limit_summary'),
    path('cont/summary/', views.cont_summary, name='cont_summary'),
    path('diff1/summary/', views.diff1_summary, name='diff1_summary'),
    path('diff2/summary/', views.diff2_summary, name='diff2_summary'),
    path('diffapply/summary/', views.diffapply_summary, name='diffapply_summary'),
    path('limit/test/', views.limit_test, name='limit_test'),
    path('cont/test/', views.cont_test, name='cont_test'),
    path('diff1/test/', views.diff1_test, name='diff1_test'),
    path('diff2/test/', views.diff2_test, name='diff2_test'),
    path('diffapply/test/', views.diffapply_test, name='diffapply_test'),
    path('', views.index, name='index'),
]
