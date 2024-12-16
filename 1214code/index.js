(function (window, document) {

    var PREV_TYPE = "PREV";
    var CURRENT_TYPE = "CURRENT";
    var NEXT_TYPE = "NEXT";
    var visible = false;
    var selected = '';

    var currentYear = 2024;
    var currentMonth = 12;

    var mainCalendar = document.querySelector(".main");
    function showCalendar() {
        mainCalendar.style.display = "block";
        visible = true;
    }
    // window.showCalendar = showCalendar;
    function hiderCalendar() {
        mainCalendar.style.display = "none";
        visible = false;

    }
    // window.hiderCalendar = hiderCalendar;

    window.calendar = {
        getVisible: function () {
            return visible;
        },
        show: showCalendar,
        hider: hiderCalendar,
        init: function (prama) {
            selected = prama.choose;
            createCalendar(currentYear, currentMonth);
        },
    }

    function getDateOfMonth(year, month) {
        var dateInstance = new Date(year, month, 0);
        var dateCount = dateInstance.getDate();
        return dateCount;
    }

    //更新年月
    function updateYearAndMonth(newYear, newMonth) {
        var yearElement = document.querySelector(".calendar-current");
        var calenderRoot = document.querySelector(".main");
        yearElement.innerText = `${newYear}年${newMonth}月`
        calenderRoot.style.setProperty("--month", `"${newMonth}"`);
        currentYear = newYear;
        currentMonth = newMonth;
    }

    //初始化事件
    function bindEvent() {
        var calenderRoot = document.querySelector(".calendar-main");
        calenderRoot.addEventListener("click", function (e) {
            var dateInstance = new Date(currentYear, currentMonth - 1);
            var className = e.target.className;
            var mainBody = document.querySelector(".calendar-date");
            mainBody.innerHTML = "";
            if (className === "calendar-prev") {

                dateInstance.setMonth(dateInstance.getMonth() - 1);
                var newYear = dateInstance.getFullYear();
                var newMonth = dateInstance.getMonth() + 1;
                updateYearAndMonth(newYear, newMonth);
                createCalendar(newYear, newMonth);
            }
            if (className === "calendar-next") {
                dateInstance.setMonth(dateInstance.getMonth() + 1);
                var newYear = dateInstance.getFullYear();
                var newMonth = dateInstance.getMonth() + 1;
                updateYearAndMonth(newYear, newMonth);
                createCalendar(newYear, newMonth);
            }
            if (className.indexOf("calendar-current") > -1) {
                selected(e.target.innerText);

            }
        });
    }

    bindEvent();


    //上个月需要多少天
    function getDateOfMonthFirstDate(year, month) {
        var dateInstance = new Date(year, month - 1, 1);
        var day = dateInstance.getDay();
        return day;
    }

    //创建日期单元格文档片段的方法
    function createDateCellFragment(start, end, type) {
        var fragment = document.createDocumentFragment()   //创建文档碎片
        for (var i = start; i <= end; i++) {
            var calendarDateElement = document.createElement('div');
            // calendarDateElement.classList.add("calendar-date_base");  //给创建的日期单元格增加单独的样式
            calendarDateElement.innerText = i;

            //分情况给上月当月下月的日期单独添加样式
            switch (type) {
                case PREV_TYPE:
                    calendarDateElement.classList.add("calendar-date_disable");
                    break;
                case NEXT_TYPE:
                    calendarDateElement.classList.add("calendar-date_disable");
                    break;
                default:
                    calendarDateElement.classList.add("calendar-date_base");
                    break;
            }
            fragment.appendChild(calendarDateElement);
        }
        return fragment;
    }

    function createCalendar(year, month) {
        var calendarCurrent = document.querySelector(".calendar-current");
        calendarCurrent.innerText = `${year}年${month}月`;

        var WEEK_DATE_COUNT = 7;
        var mainFragment = document.createDocumentFragment()
        var mainBody = document.querySelector(".calendar-date");

        //当前月份天数
        var currentMonthDateCount = getDateOfMonth(year, month);
        //上一月份天数
        var prevMonthDateCount = getDateOfMonth(year, month - 1);





        //上个月需要补多少天
        var dayOfCurrentMonthFirstDate = getDateOfMonthFirstDate(year, month);
        var prevMonthDatePadding = dayOfCurrentMonthFirstDate;

        //下个月需要补多少天
        var nextMonthDatePadding =
            WEEK_DATE_COUNT -
            (prevMonthDatePadding + currentMonthDateCount) % WEEK_DATE_COUNT;

        if (nextMonthDatePadding === 7) {
            nextMonthDatePadding = 0;
        }

        //创建1号前，需要补的日期单元格
        var prevMonthDatePaddingFragment = createDateCellFragment(
            prevMonthDateCount - prevMonthDatePadding + 1,
            prevMonthDateCount,
            PREV_TYPE

        );
        //创建当前月份需要补的日期单元格
        var currentMonthDateFragment = createDateCellFragment(
            1,
            currentMonthDateCount,
            CURRENT_TYPE
        );
        //创建下个月需要补的日期单元格
        var nextMonthDatePaddingFragment = createDateCellFragment(
            1,
            nextMonthDatePadding,
            NEXT_TYPE
        );

        mainFragment.appendChild(prevMonthDatePaddingFragment);
        mainFragment.appendChild(currentMonthDateFragment);
        mainFragment.appendChild(nextMonthDatePaddingFragment);

        mainBody.appendChild(mainFragment);

        // console.log(mainBody);

    }

    // createCalendar(currentYear, currentMonth);






    // //点击上个月
    // var lastMonth = document.querySelector(".calendar-prev");
    // lastMonth.addEventListener("click", function () {
    //     var mainBody = document.querySelector(".calendar-date");
    //     mainBody.innerHTML = "";
    //     // console.log(mainBody);
    //     var calendarCurrent = document.querySelector(".calendar-current");
    //     var str = calendarCurrent.innerText
    //     var strArry = str.split(/\D/).filter(Boolean).map(Number);

    //     if (strArry[1] === 1) {
    //         strArry[0] -= 1;
    //         strArry[1] = 13;
    //     }
    //     createCalendar(strArry[0], strArry[1] - 1);

    // });

    // //点击下个月
    // var nextMonth = document.querySelector(".calendar-next");
    // nextMonth.addEventListener("click", function () {
    //     var mainBody = document.querySelector(".calendar-date");
    //     mainBody.innerHTML = "";
    //     // console.log(mainBody);
    //     var calendarCurrent = document.querySelector(".calendar-current");
    //     var str = calendarCurrent.innerText
    //     var strArry = str.split(/\D/).filter(Boolean).map(Number);
    //     if (strArry[1] === 12) {
    //         strArry[0] += 1;
    //         strArry[1] = 0;
    //     }
    //     createCalendar(strArry[0], strArry[1] + 1);
    // });

    // window.createCalendar = createCalendar;

})(window, document)







