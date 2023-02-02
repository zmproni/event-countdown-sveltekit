<script>
    /** @type {number} */
    export let number;
    /** @type {string} */
    export let dateType;

    /**
	 * @param { number } number
	 */
	function dateNumberToFormatted(number) {
		let formatted = (number < 10 && number >= 0) ? "0" : "";
		formatted += number.toString();
		return formatted
	}
</script>

<div class="block">
	<h1 class='w-20 px-2 text-5xl font-black text-center text-gray-900 lg:w-44 lg:text-8xl font-rubik'>{dateNumberToFormatted(number)}</h1>
	<p class='text-center text-gray-400'>{dateType}</p>
</div>
