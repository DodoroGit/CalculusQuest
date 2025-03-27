from django.shortcuts import render
from django.templatetags.static import static


# Create your views here.

def limit_summary(request):
    image_list = [
        "https://i.imgur.com/GdcnwMc.png",
        "https://i.imgur.com/q0W4rC9.png",
        "https://i.imgur.com/xBzsjJe.png",
        "https://i.imgur.com/Y2cmqxB.png",
        "https://i.imgur.com/4IVz5yH.png",
        "https://i.imgur.com/57PzknC.png",
        "https://i.imgur.com/E3wbpcQ.png",
        "https://i.imgur.com/s8JFFUg.png",
        "https://i.imgur.com/sriN9VW.png",
        "https://i.imgur.com/58YpFHK.png",
        "https://i.imgur.com/qvRuuid.png",
        "https://i.imgur.com/syasSZD.png",
        "https://i.imgur.com/87a7eY2.png",
        "https://i.imgur.com/u5jwz4n.png",
        "https://i.imgur.com/tWu3FKq.png",
        "https://i.imgur.com/ahPJwHa.png",
        "https://i.imgur.com/qwmHokk.png",
    ]
    return render(request, 'learning/lim_def.html', {'image_list': image_list})

def cont_summary(request):
    image_list = [
        "https://i.imgur.com/uyXQ5pq.png",
        "https://i.imgur.com/TcsGnu2.png",
        "https://i.imgur.com/XQ2tEiW.png",
        "https://i.imgur.com/eRvNCOJ.png",
        "https://i.imgur.com/tAdpxAu.png",
        "https://i.imgur.com/mgGmF4B.png",
        "https://i.imgur.com/DV7kyqW.png",
        "https://i.imgur.com/TEqDl3r.png",
        "https://i.imgur.com/HpNGN1u.png",
        "https://i.imgur.com/EaJpa3L.png",
        "https://i.imgur.com/Ai1c47l.png",
        "https://i.imgur.com/C0eRQib.png",
        "https://i.imgur.com/X88TuEg.png",
    ]
    return render(request, 'learning/cont_def.html', {'image_list': image_list})

def diff1_summary(request):
    image_list = [
        "https://i.imgur.com/BacYVq2.png",
        "https://i.imgur.com/dNqYqV9.png",
        "https://i.imgur.com/MG38OkN.png",
        "https://i.imgur.com/XpWMEdu.png",
        "https://i.imgur.com/BAWiIqI.png",
        "https://i.imgur.com/4JtZ6TP.png",
        "https://i.imgur.com/yp3K7LZ.png",
        "https://i.imgur.com/0Isl0Gv.png",
        "https://i.imgur.com/WJ7aAJn.png",
        "https://i.imgur.com/lOH0AkQ.png",
        "https://i.imgur.com/sKD5IVh.png",
        "https://i.imgur.com/RA94vmu.png",
        "https://i.imgur.com/b15HOae.png",
        "https://i.imgur.com/ArEUnGx.png",
        "https://i.imgur.com/eL8IH2F.png",
        "https://i.imgur.com/Squ1yHb.png",
    ]
    return render(request, 'learning/diff_def1.html', {'image_list': image_list})


def diff2_summary(request):
    image_list = [
        "https://i.imgur.com/yoVFc20.png",
        "https://i.imgur.com/MKmO4ZY.png",
        "https://i.imgur.com/mmtzBAF.png",
        "https://i.imgur.com/Wtp08hr.png",
        "https://i.imgur.com/dzEbbU3.png",
        "https://i.imgur.com/gx8PAzM.png",
        "https://i.imgur.com/RQ5ynDw.png",
        "https://i.imgur.com/NtFB3Nm.png",
        "https://i.imgur.com/hY7NRzv.png",
        "https://i.imgur.com/JZ8JHXf.png",
        "https://i.imgur.com/dH5mb2a.png",
    ]
    return render(request, 'learning/diff_def2.html', {'image_list': image_list})


def diffapply_summary(request):
    image_list = [
        'learning/images/diffapply_def_1.png',
        'learning/images/diffapply_def_2.png',
        'learning/images/diffapply_def_3.png',
        'learning/images/diffapply_def_4.png',
        'learning/images/diffapply_def_5.png',
        'learning/images/diffapply_def_6.png',
        'learning/images/diffapply_def_7.png',
        'learning/images/diffapply_def_8.png',
        'learning/images/diffapply_def_9.png',
        'learning/images/diffapply_def_10.png',
        'learning/images/diffapply_def_11.png',
        'learning/images/diffapply_def_12.png',
        'learning/images/diffapply_def_13.png',
        'learning/images/diffapply_def_14.png',
        'learning/images/diffapply_def_15.png',
        'learning/images/diffapply_def_16.png',
        'learning/images/diffapply_def_17.png',
        'learning/images/diffapply_def_18.png',
        'learning/images/diffapply_def_19.png',
        'learning/images/diffapply_def_20.png',
        'learning/images/diffapply_def_21.png',
        'learning/images/diffapply_def_22.png',
        'learning/images/diffapply_def_23.png',
        'learning/images/diffapply_def_24.png',
        'learning/images/diffapply_def_25.png',
        'learning/images/diffapply_def_26.png',
        'learning/images/diffapply_def_27.png',
        'learning/images/diffapply_def_28.png',
 
    ]

    return render(request, 'learning/diffapply_def.html', {'image_list': image_list})

def limit_test(request):
    return render(request, 'learning/lim_test.html')

def cont_test(request):
    return render(request, 'learning/cont_test.html')

def diff1_test(request):
    return render(request, 'learning/diff1_test.html')

def diff2_test(request):
    return render(request, 'learning/diff2_test.html')

def diffapply_test(request):
    image_list = [
        {
            'image': 'https://i.imgur.com/D4QjUi0.png',
            'hint': static('learning/images/Hint1.png')
        },
        {
            'image': 'https://i.imgur.com/08ml33O.png',
            'hint': static('learning/images/Hint2.png')
        },
        {
            'image': 'https://i.imgur.com/qD2AJtV.png',
            'hint': static('learning/images/Hint3.png')
        },
        {
            'image': 'https://i.imgur.com/JhCKPKy.png',
            'hint': static('learning/images/Hint4.png')
        },
        {
            'image': 'https://i.imgur.com/QkVSqd4.png',
            'hint': static('learning/images/Hint5.png')
        },
        {
            'image': 'https://i.imgur.com/3Yrr18e.png',
            'hint': static('learning/images/Hint6.png')
        },
        {
            'image': 'https://i.imgur.com/teyVIqd.png',
            'hint': static('learning/images/Hint7.png')
        },
        {
            'image': 'https://i.imgur.com/4gKJ1ZL.png',
            'hint': static('learning/images/Hint8.png')
        },
    ]


    return render(request, 'learning/diffapply_test.html', {'image_list': image_list})


def index(request):
    return render(request, 'learning/index.html')
