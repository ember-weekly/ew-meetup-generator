/* meetups commander component
 * To use add require('../cmds/meetups.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

module.exports = function(program) {

	program
		.command('meetups')
		.version('0.0.0')
		.description('Get the latest meetups form meetup.com')

		.option('-p, --path', 'path to get meetup sources from')
		.option('-d, --days', 'The number of days in the future to get events for.')
		.parse(process.argv);

		// .action(function(){
		// 	// Your code goes here
		// 	console.log("hmmmm + " + arguments.path);
		// });

	console.log('here');

	// if (program.path){
	// 	console.log("path = " + program.path);
	// }

	// if (program.days){
	// 	console.log("days = " + program.days);
	// }
	
};