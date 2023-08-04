const voter=require('./mongoose schema/excelcreds');
const xl=require('./router/excel');
for (const key in xl) {
const vote=new voter(xl[key]);
vote.save()
}