// Fuente: https://developers.google.com/chart/interactive/docs/gallery/timeline?hl=es-419
google.charts.load('current', { 'packages': ['timeline'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var container = document.getElementById('linea-de-tiempo');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Position' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    var ultimaActualizacion = new Date(2025, 6, 24);
    dataTable.addRows([
        ['1', 'Tiempo de vida desde el nacimiento hasta la última actualización de la presente línea de tiempo', new Date(1999, 2, 13), ultimaActualizacion],
        ['2', 'Diplomado Photoshop Nivel Avanzado', new Date(2014, 0, 1), new Date(2014, 11, 1)],
        ['7', 'Diplomado Diseño de Páginas Web', new Date(2014, 0, 1), new Date(2014, 11, 1)],
        ['3', 'Certificación HSK 1', new Date(2015, 0, 1), new Date(2015, 11, 1)],
        ['4', 'Certificación Microsoft Office Specialist for Office PowerPoint 2010', new Date(2016, 0, 1), new Date(2016, 11, 1)],
        ['5', 'Certificación DELF A1', new Date(2017, 0, 1), new Date(2017, 11, 1)],
        ['6', 'Técnico en Sistemas computacionales y desarrollo de software', new Date(2018, 0, 1), new Date(2018, 11, 1)],
        ['8', 'Curso Full Stack Developer Java', new Date(2023, 0, 1), new Date(2024, 1, 19)],//19-02-2024
        ['9', 'Certificación Huawei Cloud HCCDA', new Date(2024, 2, 1), new Date(2024, 2, 8)],//19-02-2024
        ['10', 'Licenciatura en Ingeniería en Tecnologías y sistemas de informacíon (en curso)', new Date(2022, 0, 1), ultimaActualizacion]
    ]);
    var options = {
        timeline: { showRowLabels: false },
        tooltip: { trigger: false }
    };
    chart.draw(dataTable, options);
}