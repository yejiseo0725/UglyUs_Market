$(function () {
  // Checkbox 의 상태에 따라 달라지는 값
  $(".orderList-title")
    .find("input[type=checkbox]")
    .click(function () {
      const $checkAll = $(this);
      const $check = $(".order-item").find("input[type=checkbox]");

      if ($checkAll.is(":checked") === true) {
        $check.prop("checked", true);
      } else {
        $check.prop("checked", false);
      }
    });

  $(".order-item")
    .find("input[type=checkbox]")
    .click(function () {
      const $check = $(".order-item").find("input[type=checkbox]");
      const $checkAll = $(".orderList-title").find("input[type=checkbox]");

      let itemSum = 0;
      let isCheckedAll = true;
      // bCheckedAll

      // console.log($check.length);

      for (let i = 0; i < $check.length; ++i) {
        // console.log($check.eq(i).is(":checked"));
        if ($check.eq(i).is(":checked") === true) {
          let curItemSum = $check
            .eq(i)
            .parent()
            .siblings(".sum-part-wrap")
            .find(".sum h5")
            .text();
          let curItemSumInt = parseInt(curItemSum.replace(/[^0-9]/g, ""));
          // console.log(curItemSumInt);

          itemSum = itemSum + curItemSumInt;
        } else {
          isCheckedAll = false;
        }
      }

      if (isCheckedAll === true) {
        $checkAll.prop("checked", true);
      } else {
        $checkAll.prop("checked", false);
      }
      // console.log(itemSum);

      const totalLocation = $(".calc-box .list-amount h6");
      totalLocation.text(itemSum.toLocaleString() + "원");

      const $deliveryLocation = $(".calc-box .delivery-amount h6").text();
      const $discountLocation = $(".calc-box .discount-amount h6");
      const $deliveryInt = parseInt($deliveryLocation.replace(/[^0-9]/g, ""));

      let discountCalc = itemSum * 0.1;
      $discountLocation.text(discountCalc.toLocaleString() + "원");
    });

  // Button -, + 에 따라 변화하는 수량
  $(".item-area .order-item .quantity button").click(function () {
    const $this = $(this);
    const $object = $this.siblings("h6");
    const $parLocation = $this.parent().parent().parent();
    const $objectCssLocation = $object.parent().siblings(".max-quantity");

    let $value = parseInt($object.text());

    if ($this.val() === "-") {
      if ($value > 1) {
        $object.text(--$value);
      }
    } else {
      if ($value < 5) {
        $object.text(++$value);
      }
    }
    $object.text($value);

    if ($value === 5) {
      $objectCssLocation.css({
        display: "block",
      });
    } else {
      $objectCssLocation.css({
        display: "",
      });
    }

    // 상품의 금액 찾기
    let unitPrice = $parLocation
      .find(".price")
      .text()
      .replace(/[^0-9]/g, "");

    // 수량 저장
    let quantity = $value;

    // order-item, 상품금액, 수량 보내기
    amountPrice($parLocation, unitPrice, quantity);
  });

  function amountPrice(a, b, c) {
    // 위에서 가져온 정보들로 계산만 해주기

    a.find(".sum h5").text(b * c);
    totalPrice();
  }

  function totalPrice() {
    let $orderItem = $(".order-item");
    let converseUnit = 0;
    let amountTotal = 0;

    for (let i = 0; i < $orderItem.length; i++) {
      // 각각의 합계
      converseUnit = $orderItem
        .eq(i)
        .find(".sum h5")
        .text()
        .replace(/[^0-9]/g, "");

      // 각각의 합계마다 더해주며 담아주기
      amountTotal += parseInt(converseUnit);
    }

    const $totalBox = $(".calc-box");
    const $total = $totalBox
      .find(".list-amount h6")
      .text()
      .replace(/[^0-9]/g, "");
    const $delivery = $totalBox
      .find(".delivery-amount h6")
      .text()
      .replace(/[^0-9]/g, "");
    const $discount = $total * 0.1;
    const $calc;

    console.log($total);

    // const $totalBox = $(".calc-box");
    // const $delivery = $totalBox
    //   .find(".delivery-amount h6")
    //   .text()
    //   .replace(/[^0-9]/g, "");
    // const $choosedItemPrice = $(".list-amount h6")
    //   .text()
    //   .replace(/[^0-9]/g, "");
    // const $discountCalc = $choosedItemPrice * 0.1;
    // const $calc = totalSum - $discountCalc + parseInt($delivery);

    // $totalBox.find(".list-amount h6").text(totalSum.toLocaleString() + "원");
    // $totalBox
    //   .find(".discount-amount h6")
    //   .text($discountCalc.toLocaleString() + "원");
    // $totalBox.find(".total-amount h5").text($calc.toLocaleString() + "원");
  }

  $(".close-area .close-btn").click(function () {
    $(this).parent().parent().css({
      display: "none",
    });
  });
});
