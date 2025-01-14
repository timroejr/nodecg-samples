'use strict';

$('#toth-lowerthird_in').click(function () { nodecg.sendMessage('lowerthirdIn', updateData()); });
$('#toth-lowerthird_out').click(function () { nodecg.sendMessage('lowerthirdOut'); });
$('#toth-lowerthird_pulse10').click(function () { nodecg.sendMessage('lowerthirdPulse', pulse(10)); });
$('#toth-lowerthird_pulse30').click(function () { nodecg.sendMessage('lowerthirdPulse', pulse(30)); });
$('#toth-lowerthird_pulse60').click(function () { nodecg.sendMessage('lowerthirdPulse', pulse(60)); });

function updateData() {
    return {
        'title': $('#toth-lowerthird_title').val(),
        'body': $('#toth-lowerthird_body').val()
    };
}

function pulse(duration) {
    var msg = updateData();
    msg.duration = duration;
    return msg;
}
