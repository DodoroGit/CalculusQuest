from django.shortcuts import render

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
        "https://i.imgur.com/FRRCE8g.png",
        "https://i.imgur.com/hOxLNZZ.png",
        "https://i.imgur.com/91ukfOY.png",
        "https://i.imgur.com/nXrYoB7.png",
        "https://i.imgur.com/X3EY0Eq.png",
        "https://i.imgur.com/hM3OTgz.png",
        "https://i.imgur.com/fdGpSxv.png",
        "https://i.imgur.com/UpzYDUh.png",
        "https://i.imgur.com/3ZEDdJW.png",
        "https://i.imgur.com/hVoJvS1.png",
        "https://i.imgur.com/zz9KRSg.png",
        "https://i.imgur.com/MnAB17p.png",
        "https://i.imgur.com/Cm7wnyQ.png",
        "https://i.imgur.com/yHbyRCU.png",
        "https://i.imgur.com/5UoQNz5.png",
    ]
    return render(request, 'learning/diffapply_def.html', {'image_list': image_list})

def index(request):
    return render(request, 'learning/index.html')
