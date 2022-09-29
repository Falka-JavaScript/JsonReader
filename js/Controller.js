class Controller {
    dateTimes = [];
    measurements = [];
    context = null;
    source = '../../data/data.json';

    loadData() {
        $.getJSON(this.source, (json) => {
            console.log(json);
            let out = '';
            let dateTime = '';
            let measurement = 0;
            for (let item of json.results) {
                dateTime = item.MeasurementDate;
                measurement = item.temperature;
                this.dateTimes.push(dateTime);
                this.measurements.push(measurement);
                out += `
                <tr>
                <td>${dateTime}</td>
                <td>${measurement}</td>
                </tr>
                `;
            }
            $('tbody').html(out);
            console.log('data -> ok');
            console.log(this.dateTimes);
            console.log(this.measurements);
        })
    }

    resetData() {
        $('tbody').html('');
        this.dateTimes.length = 0;
        this.measurements.length = 0;
        this.initCanvas();
    }

    initContext() {
        const canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
    }

    initCanvas() {
        const logo = document.getElementById('logo');
        this.context.clearRect(0, 0, 900, 500);
        this.context.drawImage(logo, 0, 0)
    }

    buildAxios(g){
        g.clearRect(0,0,900,500);
        g.fillStyle = 'lightgray';
        g.lineWidth = 1;
        g.beginPath();
        //
        g.moveTo(10,10);
        g.lineTo(10,490);
        g.lineTo(890,490);
        g.stroke();
    }

    buildDiagram(){
        let g = this.context;
        this.buildAxios(g);
        ///
    }

}