$(function () {
  // clost btn 누르면 아이템 삭제
  $(".close-area .close-btn").click(function () {
    $(this).parent().parent().css({
      display: "none",
    });
  });

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
      // Boolean --- CheckedAll

      console.log($check.eq(i).parent().parent().find(".price h5").text());

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

          itemSum = itemSum + curItemSumInt;
        } else {
          isCheckedAll = false;
        }
      }
      // itemSum === checked 합계만 계산
      // console.log(itemSum);

      // 총 상품금액
      const $checkedAmount = $(".calc-box .list-amount h6");
      $checkedAmount.text(itemSum.toLocaleString() + "원");

      // 총 배송비
      const $delivery = $(".delivery-amount h6")
        .text()
        .replace(/[^0-9]/g, "");

      // 할인 위치
      const $discountLocation = $(".discount-amount h6");
      // console.log($discountLocation);

      // 10% 할인 계산
      const $discountCalc =
        parseInt($checkedAmount.text().replace(/[^0-9]/g, "")) * 0.1;

      // 할인 위치에 10% 할인 계산 대입
      $discountLocation.text($discountCalc.toLocaleString() + "원");

      if (isCheckedAll === true) {
        $checkAll.prop("checked", true);
      } else {
        $checkAll.prop("checked", false);
      }

      SumCheckedItem();
    });

  // Button -, + 에 따라 변화하는 수량
  $(".item-area .order-item .quantity button").click(function () {
    const $this = $(this);
    const $object = $this.siblings("h6");
    const $parLocation = $this.parent().parent().parent(); // order-item
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

    SumCheckedItem();
  });

  function amountPrice(a, b, c) {
    // 가격 * 수량
    // 위에서 가져온 정보들로 계산만 해주기

    a.find(".sum h5").text(b * c);
    totalPrice();
  }

  function totalPrice() {
    // 총 주문 금액

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
    const $discount = parseInt(
      $totalBox
        .find(".discount-amount h6")
        .text()
        .replace(/[^0-9]/g, "")
    );

    const $calc = amountTotal - parseInt($discount) + parseInt($delivery);

    $totalBox
      .find(".discount-amount h6")
      .text($discount.toLocaleString() + "원");
    $totalBox.find(".list-amount h6").text(amountTotal.toLocaleString() + "원");
    $totalBox.find(".total-amount h5").text($calc.toLocaleString() + "원");
  }
});

// CheckedItemShowCalcBox()
// CalculateItemTotalPrice()

function SumCheckedItem() {
  const $check = $(".order-item").find("input[type=checkbox]");
  const $checkAll = $(".orderList-title").find("input[type=checkbox]");

  let itemSum = 0;
  let isCheckedAll = true;
  // Boolean 검사 --- CheckedAll

  for (let i = 0; i < $check.length; ++i) {
    // console.log($check.eq(i).is(":checked"));

    // 수량 위치
    const itemCount = $(".item-area .order-item .quantity button").siblings(
      "h6"
    );
    // 합계 위치
    const itemTotal = $(".order-item .sum h5");
    // 가격 (text)
    let sCurItemPrice = $check.eq(i).parent().parent().find(".price h5").text();

    const iCurItemPrice = parseInt(sCurItemPrice.replace(/[^0-9]/g, ""));
    const iCurItemCount = parseInt(itemCount.eq(i).text());
    const iCurItemTotalPrice = iCurItemPrice * iCurItemCount;

    itemTotal.eq(i).text(iCurItemTotalPrice.toLocaleString() + "원");

    if ($check.eq(i).is(":checked") === true) {
      itemSum = itemSum + iCurItemTotalPrice;
    } else {
      isCheckedAll = false;
    }
  }

  const $checkedAmount = $(".calc-box .list-amount h6");
  $checkedAmount.text(itemSum.toLocaleString() + "원");

  const $delivery = $(".delivery-amount h6")
    .text()
    .replace(/[^0-9]/g, "");

  const $discountLocation = $(".discount-amount h6");
  console.log($discountLocation);

  const $discountCalc =
    parseInt($checkedAmount.text().replace(/[^0-9]/g, "")) * 0.1;

  $discountLocation.text($discountCalc.toLocaleString() + "원");

  if (isCheckedAll === true) {
    $checkAll.prop("checked", true);
  } else {
    $checkAll.prop("checked", false);
  }
}
