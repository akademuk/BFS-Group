$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".tabItemSection").click(function() {
    $(".tabItemSection").toggleClass("active");
    $(this).siblings().addClass("flexActive");
	$(".back").removeClass("flexActive");
	$(".back").addClass("backActive");
	$(".tabItemSection").click(function() {
		$(".tabItemSection").addClass("active");
	});
	$(".fileEdit").click(function() {
		$(".tabItemSection").addClass("active");
		$(".tabItemSectionSlider").addClass("active");
	});
});

$(".back").click(function()  {
	$(".tabItemSection").removeClass("flexActive")
	$(".tabItemSection").removeClass("active");
	$(".back").removeClass("backActive");
	$(".tab_itemBtn ").removeClass("flexActive");
	$(".tabItemSectionSlider").removeClass("active");
});



$('.companyRegistration').on("click", function() {
	$('.companyRegistration').removeClass('iset_active');
	$(this).addClass('iset_active');
  });