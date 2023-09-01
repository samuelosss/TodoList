$(document).ready(function () {
	$('input[type="checkbox"]').on("click", function (e) {
		// Toggle the "striked" class of the clicked LI
		$(this).parent().toggleClass("striked");
		e.stopPropagation(); // Prevent the LI click event from triggering
	});

	// Add a click event handler to the LI elements, checkboxes, and labels
	$("li").on("click", function (e) {
		// Toggle the "striked" class of the clicked LI
		$(this).toggleClass("striked");

		// Find the checkbox element within the LI
		const checkbox = $(this).find('input[type="checkbox"]');
		// Toggle the checkbox state (checked/unchecked)
		checkbox.prop("checked", !checkbox.prop("checked"));
	});

	$("label").on("click", function (e) {
		// Toggle the "striked" class of the clicked LI
		$(this).toggleClass("striked");
		// Find the checkbox element within the LI
		const checkbox = $(this).parent().find('input[type="checkbox"]');
		// Toggle the checkbox state (checked/unchecked)
		checkbox.prop("checked", !checkbox.prop("checked"));
	});
});
