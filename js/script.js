"use strict"

// document.body.classList.add('body_font_style');
//
// function createElement(name, classes, innerHTML) {
//
//     let arrClases = classes.split(",").join("");
//     let Element = document.createElement(name);
//     Element.className = arrClases;
//
//     if (!innerHTML) {
//
//     } else {
//         Element.innerHTML = innerHTML;
//     }
//     // let innerEl = innerHTML ? Element.innerHTML = innerHTML : Element;
//
//     return Element;
// };
document.body.classList.add('body_font_style');

function createElement(name, classes, innerHTML) {
    const Element = document.createElement(name);
    Element.className = classes.split(",").join("");

    if (innerHTML) {
        Element.innerHTML = innerHTML;
    }

    return Element;
};


function createNewsCard(grid, title, date, text, commentCount, numberBlock){
    const item = createElement("div", "item-a, hover" +numberBlock);
    grid.append(item);

    // // кол-блок-8 текст
    const img  = createElement("div", "main-text");
    contCol8.append(col8Text);

    // // // кол-блок-8 текст внутри
    const textcol8H1 = createElement("div", "h1",title);
    const textcol8P = createElement("div", "p", text);
    col8Text.append(textcol8H1);
    col8Text.append(textcol8P);

    // // // // //футер
    const footercol8 = createElement("div", "footer");
    col8Text.append(footercol8);

    const dataFCol8 = createElement("div", "data", date);
    footercol8.append(dataFCol8);
    const commentFCol8 = createElement("div","comments", commentCount+" комментариев");
    footercol8.append(commentFCol8);

    return contCol8;
}









// //ТЕКСТ НОВОСТЕЙ
const newDiv = createElement('div', 'news', 'Новости');
document.body.append(newDiv);

// ========== новый див с сеткой=============

let containerCentral = createElement("div", "div_grid");
document.body.append(containerCentral);

// ================== див контейнер в сетке================

let grid = createElement("div", "grid-container");
containerCentral.append(grid);

// ==== БЛОК - 1 ======================================================================================================

let item = createElement("div", "item-a, hover");
grid.appendChild(item);

let img = createElement("img", "phone_photo_kost");
img.src = "img/fon1.jpg";
item.appendChild(img);

let h3 = createElement("h3", "text_kostil", "Xiaomi выпустит недорогой смартфон Poco C3 с процессором Helio G35");
item.appendChild(h3);

let p = createElement("p", "text_kostil2", "Бренд Poco, представленный китайской компанией Xiaomi в августе 2018 года, вскоре\n" +
    "                анонсирует очередной смартфон, о чём сообщают интернет-источники. Новинка будет относиться к бюджетному\n" +
    "                ценовому сегменту.");
item.appendChild(p);

let pfoot = createElement("p", "text_kostil_foot", "22.07.2020 15:35");
item.appendChild(pfoot);

let pfoot2 = createElement("p", "text_kostil_foot2", "10 комментариев");
item.appendChild(pfoot2);

//======= БЛОК - 2 =====================================================================================================

let item2 = createElement("div", "item-b, hover");
grid.appendChild(item2);

let img2 = createElement("img", "mobv");
img2.src = "img/fon4.jpg";
item2.appendChild(img2);

let h32 = createElement("h3", "text_kostil", "Вторую часть ремейка Final Fantasy VII");
item2.appendChild(h32);

let p2 = createElement("p", "text_kostil2", "В недавнем интервью японскому изданию Famitsu ведущие разработчики Final Fantasy VII Remake подтвердили,\n" +
    "                что производство второго эпизода вошло в полномасштабную фазу. В той же беседе один из директоров по\n" +
    "                разработке проекта Тецуя Номура (Tetsuya Nomura) рассказал, что не позволил внести слишком много\n" +
    "                изменений во вторую половину игры.");
item2.appendChild(p2);

let pfoot22 = createElement("p", "text_kostil_foot", "22.07.2020 15:35");
item2.appendChild(pfoot22);

let pfoot222 = createElement("p", "text_kostil_foot2", "10 комментариев");
item2.appendChild(pfoot222);

//=========== БЛОК - 3 =================================================================================================

let item3 = createElement("div", "item-d, hover");
grid.appendChild(item3);

let img3 = createElement("img","mobv");
img3.src = "img/fon3.jpg";
item3.appendChild(img3);

let h33 = createElement("h3", "text_kostil", "Ускоритель AMD Radeon");
item3.appendChild(h33);

let p3 = createElement("p", "text_kostil2", "Instinct MI100 на базе архитектуры CDNA сможет потягаться с NVIDIA A100");
item3.appendChild(p3);

let pfoot3 = createElement("p", "text_kostil_foot", "22.07.2020 15:35");
item3.appendChild(pfoot3);

let pfoot33 = createElement("p", "text_kostil_foot2", "10 комментариев");
item3.appendChild(pfoot33);

//========== БЛОК - 4 ==================================================================================================

let item4 = createElement("div", "item-e, hover");
grid.appendChild(item4);

let h34 = createElement("h3", "text_kostil", "ASUS");
item4.appendChild(h34);

let p4 = createElement("p", "text_kostil2","Представила портативный игровой монитор ROG Strix XG16 с частотой 144 Гц<");
item4.appendChild(p4);

let pfoot34 = createElement("p", "text_kostil_foot", "22.07.2020 15:35");
item4.appendChild(pfoot34);

let pfoot4 = createElement("p", "text_kostil_foot2", "10 комментариев");
item4.appendChild(pfoot4);

// ======== БЛОК - 5 ===================================================================================================

let item5 = createElement("div", "item-r, hover");
grid.appendChild(item5);

let h35 = createElement("h3", "text_kostil", "Игровая гарнитура");
item5.appendChild(h35);

let p5 = createElement("p", "text_kostil2", "ASUS ROG Cetra RGB погружного типа снабжена активным шумоподавлением");
item5.appendChild(p5);

let pfoot5 = createElement("p", "text_kostil_foot", "22.07.2020 15:35");
item5.appendChild(pfoot5);

let pfoot55 = createElement("p", "text_kostil_foot2", "10 комментариев");
item5.appendChild(pfoot55);

// ========== НОВЫЙ КОНТЕЙНЕР ==========================================================================================

let grid_cont = createElement("div", "grid-container2");
containerCentral.appendChild(grid_cont);

//============ БЛОК - 6 ================================================================================================

let item6 = createElement("div", "item-c, hover");
grid_cont.appendChild(item6);

let img6 = createElement("img", "mobv");
img6.src = "img/fon2.jpg";
item6.appendChild(img6);

let h36 = createElement("h3", "text_kostil", "Роботы-доставщики Amazon Scout");
item6.appendChild(h36);

let p6 = createElement("p", "text_kostil2", " В Атланте(Штат Джорджия) и Франклине(Штат Теннесси) доставкой посылок Amazon некоторым клиентам начали\n" +
    "                заниматся роботы.");
item6.appendChild(p6);

let pfoot6 = createElement("p", "text_kostil_foot", "22.07.2020 15:35");
item6.appendChild(pfoot6);

let pfoot66 = createElement("p", "text_kostil_foot2", "10 комментариев");
item6.appendChild(pfoot66);

// ========= БЛОК - 7 ==================================================================================================

let item7 = createElement("div", "item-t, hover");
grid_cont.appendChild(item7);

let h37 = createElement("h3", "text_kostil", "Роботы-доставщики Amazon Scout");
item7.appendChild(h37);

let p7 = createElement("p", "text_kostil2", " В Атланте(Штат Джорджия) и Франклине(Штат Теннесси) доставкой посылок Amazon некоторым клиентам начали\n" +
    "                заниматся роботы.");
item7.appendChild(p7);

let pfoot7 = createElement("p", "text_kostil_foot", "22.07.2020 15:35");
item7.appendChild(pfoot7);

let pfoot67 = createElement("p", "text_kostil_foot2", "10 комментариев");
item7.appendChild(pfoot67);

//========= БЛОК - 8 ===================================================================================================

let item8 = createElement("div", "item-y, hover");
grid_cont.appendChild(item8);

let h38 = createElement("h3", "text_kostil", "Роботы-доставщики Amazon Scout");
item8.appendChild(h38);

let p8 = createElement("p", "text_kostil2", " В Атланте(Штат Джорджия) и Франклине(Штат Теннесси) доставкой посылок Amazon некоторым клиентам начали\n" +
    "                заниматся роботы.");
item8.appendChild(p8);

let pfoot8 = createElement("p", "text_kostil_foot", "22.07.2020 15:35");
item8.appendChild(pfoot8);

let pfoot68 = createElement("p", "text_kostil_foot2", "10 комментариев");
item8.appendChild(pfoot68);

//=========== БЛОК - 9 =================================================================================================

let item9 = createElement("div", "item-u, hover");
grid_cont.appendChild(item9);

let h39 = createElement("h3", "text_kostil", "Роботы-доставщики Amazon Scout");
item9.appendChild(h39);

let p9 = createElement("p", "text_kostil2", " В Атланте(Штат Джорджия) и Франклине(Штат Теннесси) доставкой посылок Amazon некоторым клиентам начали\n" +
    "                заниматся роботы.");
item9.appendChild(p9);

let pfoot9 = createElement("p", "text_kostil_foot", "22.07.2020 15:35");
item9.appendChild(pfoot9);

let pfoot69 = createElement("p", "text_kostil_foot2", "10 комментариев");
item9.appendChild(pfoot69);