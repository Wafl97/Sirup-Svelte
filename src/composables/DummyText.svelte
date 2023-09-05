<script>
    import {theme} from "../stores/theme";

    export let with_links = false;
</script>

<p style="color: {$theme.font_color}"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi eveniet explicabo, fugit harum iure laudantium magnam natus nihil pariatur qui rem sequi similique soluta, ut! Culpa dolor maxime veniam.</span><span>Dignissimos maiores quod ut. Adipisci asperiores aspernatur, culpa deserunt dignissimos dolorum et maiores modi molestiae quia quibusdam quis, sapiente tenetur. Ab ad culpa error neque nihil provident sed suscipit voluptas?</span><span>A aliquid amet animi architecto aspernatur consequuntur delectus deserunt dolorum enim error est ex fugit illum iusto, maxime minus neque nisi perferendis perspiciatis quae quasi ullam voluptate! Molestiae officiis, vel.</span><span>Alias aliquid beatae eos, esse excepturi harum in labore maxime numquam odio ratione tempore temporibus, veniam. Commodi id laborum omnis recusandae sed sequi sunt ut? Ea minus officia praesentium quae.</span><span>Asperiores corporis culpa cum dolor dolores ea eaque eum explicabo, incidunt maxime molestiae nobis, odit officiis possimus quae quam quos repellat repellendus sapiente soluta ut vel voluptate voluptatem. Praesentium, saepe.</span><span>Amet delectus, dolore eaque harum iure minus quas sapiente voluptatem. Aliquid amet aut blanditiis consectetur enim esse eum expedita ipsum minus nam necessitatibus omnis perferendis, praesentium quae repellat sapiente ullam!</span><span>Ab animi blanditiis cupiditate, eum explicabo, id molestiae nihil omnis praesentium quod, recusandae soluta voluptatibus? Aperiam architecto dolorem ea fugit impedit laborum omnis possimus provident ut veniam? Odio, qui velit.</span><span>Aut commodi, consectetur corporis culpa eaque et, eveniet exercitationem facilis fugit illo inventore iste mollitia necessitatibus neque nihil non obcaecati pariatur possimus praesentium reprehenderit similique unde vel voluptas voluptate voluptatem!</span><span>Aliquid animi, aperiam aspernatur assumenda cupiditate delectus doloribus eligendi esse ipsa laudantium magni minima minus modi molestiae nam nulla obcaecati perspiciatis praesentium quae quas quibusdam quidem reiciendis voluptas. Autem, quod.</span><span>Beatae consectetur dolores eveniet ipsam laboriosam magnam odit quae soluta. Aliquam debitis eius eveniet nihil optio perferendis perspiciatis quae sint ullam voluptatibus. Architecto maiores quibusdam totam voluptas? Fuga, in, tempore!</span>
</p>

{#if with_links}
    <ul>
        <li><a href="#">Go Here</a></li>
        <li><a href="#">Or Here</a></li>
        <li><a href="#">Or maybe Here</a></li>
        <li><a href="#">Why not Here</a></li>
        <li><a href="#">No go Here</a></li>
    </ul>
{/if}