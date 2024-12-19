(function (window) {

    // <div
    //     class="w-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow-md p-4">
    //     <div class="text-20">标题</div>
    //     <div>内容</div>
    //     <div class="flex justify-end">
    //         <div class="py-2 px-3 border rounded-lg bg-black text-white">确定</div>
    //         <div class="py-2 px-3 border rounded-lg  ml-2">取消</div>
    //     </div>
    // </div>

    var dialogRoot = null;
    // var configure = null;
    //定义确定的回调函数
    function confirmCallback() {
        hideDialog();
        // configure.success();
    }

    //定义取消的回调函数
    function cancelCallback() {
        hideDialog();
        // configure.fail();
    }
    //定义dialog显示的方法
    function showDialog() {
        if (dialogRoot) {
            dialogRoot.style.display = "block";
        }
    }
    //定义dialog隐藏的方法
    function hideDialog() {
        if (dialogRoot) {
            dialogRoot.style.display = "none";
        }
    }

    //创建节点
    function createStruct(option) {
        // var fragment = document.createDocumentFragment();
        var container = document.createElement('div');
        container.className = "w-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow-md p-4";
        var titleElement = document.createElement('div');
        titleElement.className = "text-20";
        titleElement.innerText = option.title;

        var contentElement = document.createElement('div');
        contentElement.innerText = option.message;
        var buttonsContainer = document.createElement('div');
        buttonsContainer.className = "flex justify-end";


        var confirmButton = document.createElement('div');
        confirmButton.className = "py-2 px-3 border rounded-lg bg-black text-white cursor-pointer";
        confirmButton.innerText = option.buttons.confirm.text;
        confirmButton.addEventListener("click", confirmCallback);

        var cancelButton = document.createElement('div');
        cancelButton.className = "py-2 px-3 border rounded-lg ml-2 cursor-pointer";
        cancelButton.innerText = option.buttons.cancel.text;
        cancelButton.addEventListener("click", cancelCallback);

        buttonsContainer.appendChild(cancelButton);
        buttonsContainer.appendChild(confirmButton);
        container.appendChild(titleElement);
        container.appendChild(contentElement);
        container.appendChild(buttonsContainer);

        return container;

    }

    var defaultConfig = {
        confirm: {
            text: '确定'
        },
        cancel: {
            text: '取消'
        },
    };


    function createDialog(config) {
        config = config || {};  //检测config是否为空对象
        if (!(typeof config.title === "string" && typeof config.message === "string")) {
            return;
        }
        //config 开发者传入的配置项
        var configure = Object.assign(defaultConfig, config);
        // configure = _.merge(defaultConfig, config);
        console.log(configure);

        dialogRoot = createStruct(configure);
        console.log(dialogRoot);
        document.body.appendChild(dialogRoot);
        // console.log(configure);
    }
    window.createDialog = createDialog;
})(window);