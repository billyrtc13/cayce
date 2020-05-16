<div class="barra">
    <div></div>
</div>

<style>
    .barra {
        height: 6px;
        background-color: transparent;
        width: 100%;
        min-width: 200px;
        margin: .5em 0;
    }

    .barra div {
        height: 100%;
        animation: mover 3s cubic-bezier(0.42, 0, 1, 1) infinite;
        background-color: blue;
    }

    @keyframes mover {
        from {
            background-color: cadetblue;
            margin-left: 0;
            width: 0;
        }

        50% {
            margin-left: 20%;
            width: 80%;
        }

        to {
            margin-left: 100%;
            width: 0;
        }
    }
</style>