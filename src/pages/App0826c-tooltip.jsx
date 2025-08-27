import $ from 'jquery'
import '../css/app0826.css'
import svg1 from '../assets/react.svg'

const App = () => {
    useEffect(() => {
        $('a:has(.ttpShow)').mouseover(function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
            $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
        }).mousemove(function (e) {
            $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' });
        }).mouseout(function () {
            $('#ttpPanel').remove();
        })
    },[])
    return (
        <div className="wrap">
            <h1>Tooltip</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, velit aliquid. Dolorem iusto deleniti
                aperiam esse laborum delectus cum rem itaque, nesciunt tempore laboriosam distinctio praesentium. Quod,
                blanditiis nemo. Molestiae, ducimus, temporibus esse repudiandae deleniti nostrum saepe incidunt voluptas
                inventore at possimus odit,
                <a href="#">
                    cumque asperiores
                    <span className="ttpShow">Tooltip內容說明。。。</span>
                </a>
                dolore! Rerum corrupti est, repellat aut ducimus dolore hic
                corporis ipsum saepe minima vero adipisci, accusantium sint ullam laboriosam, praesentium magnam! Repellat
                alias labore cumque nobis beatae dolor necessitatibus quis ipsa hic aliquid id molestias natus, ut eum sit
                harum possimus. Dicta ullam saepe, doloribus porro, voluptas,
                <a href="#" >
                    <img src={svg1} alt="" />
                    <span className="ttpShow">圖片說明</span>
                </a>
                optio dolores eum voluptate adipisci sint
                nesciunt vero? Quaerat praesentium corrupti impedit adipisci. Aliquam veritatis vitae, minima libero
                voluptate sunt repudiandae? Doloribus sit aut pariatur animi cumque, distinctio repellat consequuntur
                reiciendis totam facere, est nobis, aliquam perferendis harum corporis iste dolores temporibus earum sunt!
                Quo eos nulla unde dolores? Atque itaque odio maiores dolor possimus dolorum voluptates sunt alias
                asperiores nisi cum, quasi soluta labore cumque provident fugit eveniet fuga vitae commodi dolores! Eius est
                in cumque obcaecati deleniti eveniet, nostrum explicabo sit molestiae? Id quibusdam aliquid vel incidunt ab.
                Harum asperiores ipsa impedit voluptate dolores! Possimus, porro ducimus vitae dicta esse assumenda culpa
                quia aperiam dignissimos non repellendus accusamus sapiente repellat magnam recusandae laudantium at fuga
                ipsum a quis? Libero iste quas sunt, aspernatur veniam optio aperiam ea, voluptas nam, repellendus cumque!
                Neque maxime, voluptate minima quo possimus error repudiandae labore velit cum, quisquam eos molestiae
                aperiam laudantium placeat dolores illo! Accusantium ullam commodi numquam, et vitae asperiores at deleniti
                incidunt repudiandae reiciendis neque cum non tempore! Ipsam nesciunt omnis accusamus corrupti earum
                voluptas nostrum minus nobis eius cumque, a saepe porro ea suscipit consequuntur dignissimos iste officiis
                totam optio soluta error, iusto quos velit nihil! Hic officiis voluptatem quo accusamus omnis ad minima
                soluta nisi enim, dicta fugit nam error accusantium aliquam! Sequi repellendus, ratione cum perspiciatis
                dolorem, ipsa deserunt quas dolore at quaerat dolor excepturi fugiat facilis! Explicabo et ipsum perferendis
                illum rem dolorum, quis saepe architecto. Fugiat nemo minus reiciendis delectus, quibusdam distinctio?
                Facilis dignissimos, in nobis placeat eaque, facere expedita omnis laudantium vitae iure itaque inventore
                dolorem autem aut earum? Voluptate, voluptatibus alias? Earum ipsam, excepturi aut tenetur quisquam minima
                animi reprehenderit? Illum laboriosam, quo rerum voluptate facilis omnis ullam veniam eius esse doloribus
                magnam, ipsa hic aliquam eos consequatur id, corrupti commodi non porro accusamus tempore amet optio
                assumenda nobis! Cumque, asperiores temporibus, impedit earum facilis magnam rerum odit deleniti harum
                doloribus porro omnis maiores deserunt quae alias non molestias ullam. Qui est quo blanditiis, voluptates
                totam esse, sapiente eos cum, consectetur dolorum pariatur asperiores nam dignissimos debitis id! Excepturi
                esse sapiente ipsam minus. Nostrum aspernatur doloribus soluta fugiat provident iste omnis, dolores sequi
                consequuntur eum voluptates vitae ducimus repellendus totam perferendis ullam eveniet voluptatibus maxime
                possimus asperiores, temporibus repellat at tempore odit. Hic facilis dolores exercitationem necessitatibus
                magni harum vel ex odit accusamus ea. Maxime quas temporibus mollitia repellat, eum magni aut omnis sed
                praesentium, voluptatem magnam? Iste odit nostrum est?
            </p>
        </div>

    )
}

export default App