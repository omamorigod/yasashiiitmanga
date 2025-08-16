const pageNum = 1;

function createGourmet_man( pageCount ){
    const imagecontents = document.getElementById('imagecontents');
    for(let i=1; i<=pageCount; i++){
        //１コマ分を生成
            // pタグを生成
            let pageContent = document.createElement('p');
            // imgタグを生成
            let img_element = document.createElement('img');
            // imgタグに対応する画像のpathを指定
            img_element.src = `image/${i}.jpg`; 
            // imgタグに対応する画像のclassを指定 
            img_element.className  = ('imagecontents');
            //pタグ配下にimgタグをappend
            pageContent.appendChild( img_element );
        //１コマ分をコマ表示領域にAppend
        imagecontents.appendChild( pageContent );
    };
};

createGourmet_man(pageNum)


