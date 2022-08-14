$(function () {  
  const checkBoxAll =  $(".orderList-title").find("input[type=checkbox]");
  const incDecBtn = $(".item-area .order-item .quantity button");

  checkBoxAll.click(handleCheckBoxAll, SumCheckedItem);
  incDecBtn.click(handleIncDecBtn, SumCheckedItem);

  $(".close-area .close-btn").click(function () {
    $(this).parent().parent().css({
      display: "none",
    });
  });
});

function handleCheckBoxAll () {
  const $checkAll = $(this);
  const $check = $(".order-item").find("input[type=checkbox]");

  if ($checkAll.is(":checked") === true) {
    $check.prop("checked", true);
  } else {
    $check.prop("checked", false);
  }
}

function handleIncDecBtn () {
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
}

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
