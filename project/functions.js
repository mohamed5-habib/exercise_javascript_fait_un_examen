function verif_html(f){
    n=0;
    if(document.f.a[1].checked){
        n++;
    }
    if(document.f.b[2].checked){
        n++;
    }
    if(document.f.c[2].checked){
        n++;
    }
    if(document.f.d[2].checked){
        n++;
    }
    if(document.f.e[0].checked){
        n++;
    }
    if(document.f.f[2].checked){
        n++;
    }
    if(document.f.g[2].checked){
        n++;
    }
    if(document.f.h[0].checked){
        n++;
    }
    if(document.f.i[0].checked){
        n++;
    }
    if(document.f.j[2].checked){
        n++;
    }
    if(document.f.k[2].checked){
        n=n+1;
    }
    if(document.f.l[2].checked){
        n++;
    }
    if(document.f.m[0].checked){
        n++;
    }
    if(document.f.n[0].checked){
        n++;
    }
    if(document.f.o[1].checked){
        n++;
    }
    if(document.f.p[1].checked){
        n++;
    }
    if(document.f.q[1].checked){
        n++;
    }
    if(document.f.r[1].checked){
        n++;
    }
    if(document.f.s[2].checked){
        n++;
    }
    if(document.f.t[1].checked){
        n++;
    }
    alert(" vous avez repondue à "+n+" question correctement");
    alert("votre score est de "+n*100/20+"%");
    if(n>=13){
        alert("félicitation vous avez passer l'examen");
    };
    if(n<13){
        alert("Vous étes refusé .La prochaine fois peut-être ")
    }
}
function verif_js(f2){
    n=0;
    if(document.f2.a[2].checked){
        n++;
    }
    if(document.f2.b[0].checked){
        n++;
    }
    if(document.f2.c[2].checked){
        n++;
    }
    if(document.f2.d[1].checked){
        n++;
    }
    if(document.f2.e[1].checked){
        n++;
    }
    if(document.f2.f[1].checked){
        n++;
    }
    if(document.f2.g[3].checked){
        n++;
    }
    if(document.f2.h[1].checked){
        n++;
    }
    if(document.f2.i[0].checked){
        n++;
    }
    if(document.f2.j[2].checked){
        n++;
    }
    alert(" vous avez repondue à "+n+" question correctement");
    alert("votre score est de "+n*10+"%");
    if(n>6){
        alert("félicitation vous avez passer l'examen");
    };
    if(n<=6){
        alert("Vous étes refusé .La prochaine fois peut-être ")
    }
}
function verif_py(f1){
    n=0;
    if(document.f1.a[0].checked){
        n++;
    }
    if(document.f1.b[1].checked){
        n++;
    }
    if(document.f1.c[0].checked){
        n++;
    }
    if(document.f1.d[0].checked){
        n++;
    }
    if(document.f1.e[3].checked){
        n++;
    }
    if(document.f1.f[0].checked){
        n++;
    }
    if(document.f1.g[3].checked){
        n++;
    }
    if(document.f1.h[1].checked){
        n++;
    }
    if(document.f1.i[2].checked){
        n++;
    }
    if(document.f1.j[2].checked){
        n++;
    }
    alert(" vous avez repondue à "+n+" question correctement");
    alert("votre score est de "+n*10+"%");
    if(n>6){
        alert("félicitation vous avez passer l'examen");
    };
    if(n<=6){
        alert("Vous étes refusé .La prochaine fois peut-être ")
    }
}
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
            'linear-gradient(to right,rgb(255, 81, 0),orange)',
            'linear-gradient(to right,rgb(255, 230, 0),rgb(236, 226, 82))',
            'linear-gradient(to right,rgb(32, 117, 245),rgb(47, 168, 248))'
            ]; 

const options = {
    threshold:0.7
};

let observer = new IntersectionObserver(navChek,options);
function navChek(entries){
    entries.forEach(entry =>{
        const claaName = entry.target.className;
        const avctiveAnchor = document.querySelector('[data-page=${className}]');
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = avctiveAnchor.getBoundingClientRect();
        const directions = {
            height:coords.height,
            width:coords.width,
            top:coords.top,
            left:coords.left
        };
        if(entry.isIntersecting){
            bubble.style.setProperty("height",'${directions.height}px');
            bubble.style.setProperty("top",'${directions.top}px');
            bubble.style.setProperty("width",'${directions.width}px');
            bubble.style.setProperty("left",'${directions.left}px');
            bubble.style.background = gradients[gradientIndex];
        }
    });
}
sections.forEach(section =>{
    observer.observe(section);
});