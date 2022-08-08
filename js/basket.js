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
    const MAX_COUNT = 5;
    const MIN_COUNT = 1;

    const $this = $(this);
    const $object = $(this).siblings("h6");
    const $objectCssLocation = $object.parent().siblings(".max-quantity");

    let $value = parseInt($object.text());

    if ($this.val() === "-") {
      $value = Math.max(--$value, 1);
      // if ($value > 1) {
      // $object.text(--$value);
    } else {
      $value = Math.min(++$value, 5);
      // if ($value < 5) {
      // $object.text(++$value);
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

    // $value = Math.min($value, MIN_COUNT);
    // $value = Math.max($value, MAX_COUNT);

    // console.log($value);

    amountPrice();
  });

  function amountPrice() {
    // orderitem1 의 합계
    const $orderItem1 = $(".order-item1");
    const $price1 = $orderItem1
      .find(".price h5")
      .text()
      .replace(/[^0-9]/g, ""); // 상품 가격
    const $value1 = $orderItem1.find(".quantity h6").text(); // 수량
    const $sum1 = $price1 * $value1; // item 1 합계: 상품 가격 * 수량
    $orderItem1.find(".sum h5").text($sum1.toLocaleString() + "원");

    // orderitem2 의 합계
    const $orderItem2 = $(".order-item2");
    const $price2 = $orderItem2
      .find(".price h5")
      .text()
      .replace(/[^0-9]/g, ""); // 상품 가격
    const $value2 = $orderItem2.find(".quantity h6").text(); // 수량
    const $sum2 = $price2 * $value2; // item 2 합계: 상품 가격 * 수량
    $orderItem2.find(".sum h5").text($sum2.toLocaleString() + "원");

    // orderitem3 의 합계
    const $orderItem3 = $(".order-item3");
    const $price3 = $orderItem3
      .find(".price h5")
      .text()
      .replace(/[^0-9]/g, ""); // 상품 가격
    const $value3 = $orderItem3.find(".quantity h6").text(); // 수량
    const $sum3 = $price3 * $value3; // item 3 합계: 상품 가격 * 수량
    $orderItem3.find(".sum h5").text($sum3.toLocaleString() + "원");

    totalPrice($sum1, $sum2, $sum3);
  }

  function totalPrice(s1, s2, s3) {
    const totalSum = s1 + s2 + s3;
    // console.log(totalSum);

    const $totalBox = $(".calc-box");
    const $delivery = $totalBox
      .find(".delivery-amount h6")
      .text()
      .replace(/[^0-9]/g, "");
    const $choosedItemPrice = $(".list-amount h6")
      .text()
      .replace(/[^0-9]/g, "");
    const $discountCalc = $choosedItemPrice * 0.1;
    // console.log($discountCalc);
    const $calc = totalSum - $discountCalc + parseInt($delivery);
    // console.log($calc);

    $totalBox.find(".list-amount h6").text(totalSum.toLocaleString() + "원");
    $totalBox
      .find(".discount-amount h6")
      .text($discountCalc.toLocaleString() + "원");
    $totalBox.find(".total-amount h5").text($calc.toLocaleString() + "원");
  }

  $(".close-area .close-btn").click(function () {
    $(this).parent().parent().css({
      display: "none",
    });
  });
});
