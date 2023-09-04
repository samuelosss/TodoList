$(document).ready(function () {
	$('input[type="checkbox"]').on("click", function (e) {
		// Toggle the "striked" class of the clicked LI when checkbox checked
		$(this).parent().toggleClass("striked");
		e.stopPropagation(); // Prevent the LI click event from triggering
	});

	// Add a click event handler to the LI elements
	$("li").on("click", function (e) {
		// Toggle the "striked" class of the clicked LI
		$(this).toggleClass("striked");

		// Find the checkbox element within the LI
		const checkbox = $(this).find('input[type="checkbox"]');
		// Toggle the checkbox state (checked/unchecked)
		checkbox.prop("checked", !checkbox.prop("checked"));
	});

	// Add a click event handler to the label elements
	$("label").on("click", function (e) {
		// Toggle the "striked" class of the clicked label
		$(this).toggleClass("striked");
		// Find the checkbox element within the label - parent
		const checkbox = $(this).parent().find('input[type="checkbox"]');
		// Toggle the checkbox state (checked/unchecked)
		checkbox.prop("checked", !checkbox.prop("checked"));
	});

	// Collapsing lists clicking on the title
	$(".list-title").on("click", function (collapse) {
		console.log("clicked!");
		$(this).next(".padd").slideToggle({
			duration: 1000,
		});
	});
});
