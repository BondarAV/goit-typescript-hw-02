/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

 enum Days {
    Monday = 'weekday',
    Tuesday = 'weekday',
    Wednesday = 'weekday',
    Thursday = 'weekday',
    Friday = 'weekday',
    Saturday = 'weekend',
    Sunday = 'weekend',
  }

  function isWeekend(day: Days): boolean {
    return day === 'weekend' ;
  }