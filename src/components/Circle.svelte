<style>
    @property --color-1 {
        syntax: '<color>';
        inherits: true;
        initial-value: cyan;
    }
    @property --color-2 {
        syntax: '<color>';
        inherits: true;
        initial-value: magenta;
    }
    @property --angle {
        syntax: '<angle>';
        inherits: true;
        initial-value: 0deg;
    }
    @keyframes move {
        50%{
            --angle: 180deg;
            --color-1: magenta;
            --color-2: cyan;
        }
        100% {
            --angle: 360deg
        }
    }

    .circle {
        margin: .25rem;
        min-width: 4rem;
        min-height: 4rem;
        background: linear-gradient(var(--angle), var(--color-2), var(--color-1));
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        animation: move 15000ms infinite alternate;
        cursor: pointer;
        text-decoration: none;
        color: black;
    }
</style>

<a class="circle" href="/">C-RUP</a>