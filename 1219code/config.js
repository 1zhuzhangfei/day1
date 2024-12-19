(function (window) {
    function setSizeConfig(max) {
        var config = {};
        for (var i = 0; i < max; i++) {
            config[i] = `${i}px`;
        }
        return config;

    }
    window.tailwind.config = {
        darkMode: 'selector',
        theme: {
            extend: {
                colors: {
                    primary: '#000000',
                },
                width: setSizeConfig(1000),
                height: setSizeConfig(1000),
                fontSize:setSizeConfig(100),
            }
        }
    }
})(window);