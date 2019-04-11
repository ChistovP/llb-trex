import React, { Component,PureComponent  } from 'react';
import './SensorData.css';
import SensorMap from '../SensorMap/SensorMap.js';

class SensorData extends PureComponent {
      constructor(props) {
        super(props);

        this.state = {
            switchId:'1612',
            /*General*/
            busId: '',
            busTime: '',
            busVehicleMotionStatus: '',
            busDirection: '',
            /*Position*/
            busLat: '',
            busLon: '',
            busAlt: '',
            busClimb: '',
            busTrc: '', 
            busRotation: [],
            busGyro: [],
            busMagn : [],
            busIncl: [],
            busDist: '',
            busAccel: [],
            /*Speed*/
            busCurrentGear:'',
            busSpeed: '',
            busSpeedWheels:'',
            busSpeedTachograph:'',
            /*Status*/
            busHumidity:'',
            busAirPressure:'',
            busAmbientTemp:'',
            busCabinTemp:'',
            busWheelChairStatus:'',
            busDoorStatus:'',
            
            busSteeringWheelAngle:'',
            busSpeedLimiterStatus:'',       
            busAccelLimiterStatus:'',       
            busBrakeStatus:'',
            busParkingBrakeStatus:'',
            busAccelPedalPosition:'',
            busBreakPedalPosition:'',
            /*Battery*/
            busDCConverterStatus:'',
            busBatteryTemp: '',
            busBatteryCurrent: '',
            busBatteryPower: '',
            busBatteryVoltage: '',
            busBatteryIsCharging: '',
            busBatteryLevel: '',
            /*Weight*/
            busTotalWeight:'',
            busWeightAxle:'',
            /*Energy Consumption*/
            busConsConverter:'',
            busConsAirComp:'',
            busConsHeatPump:'',
            busConsPowerSteering:'',
            busConsDriveMotor:'',
            /*Energy Efficiency*/
            busEnergyMomentEff: '',
            busEnergyAverEff: '',
            busEnergyTotalCharged: '',
            busEnergyTotalCharged: '',
            busEnergyTotalDischarged: '',
            busEnergyTotalExternal: '',
            busEnergyTotalProcAmpHours: '',
            /*Pressure*/
            busAirCompStatus:'',
            busAirSuspPressure:'',           
            busCompAirTankPressure:'',           
            busParkingBreakPressure:'',           
            busRearAxelBrakePressure:'',           
            busFrontAxelBrakePressure:'',                    
            /*Motor*/
            busMotorRPM:'',
            busMotorTotalOpertationHours:'',
            busMotorAccelLimiterStatus:'',
            busSlipLimiterStatus:'',
            busMotorInstantPower:'',
            busSlipPersentage:'',       



            intervalId: '',
        };
this.onClick = this.handleClick.bind(this);

      }

    fetchData(id){
        const apiLink = 'https://llb.cloud.tyk.io/llb-bus-api/GetData?busId='+this.state.switchId;
        const apiToken = "5a07a2f986f30e00015b3cb1b53b6e967bbd497c9971694858aec2ca";
            fetch(apiLink,{headers:{"Authorization":apiToken}})
              .then(response => response.json())
              .then(data => this.setState({ 
                                            /*General*/
                                            busId: data.BusId,
                                            busTime: data.tsl,
                                           
                                            busDirection: data.can.TCO1_DirectionIndicator,
                                            /*Speed*/
                                            busCurrentGear: data.can.ETC2_TransCurrentGear,
                                            busSpeed: data.spd, 
                                            busSpeedWheels: data.can.CCVS_WheelBasedVehicleSpeed,
                                            busSpeedTachograph: data.can.TCO1_TachographVehicleSpeed,
                                            /*Position and  location*/
                                            busLat: data.lat, 
                                            busLon: data.lon, 
                                            busAlt: data.alt, 
                                            busTrc: data.trc, 
                                            busClimb: data.clm, 
                                            busDist: data.can.VDHR_HghRslutionTotalVehicleDistance/1000, 
                                            busRotation: data.dro,
                                            busGyro: data.gyr,
                                            busMagn : data.mgn,
                                            busIncl: data.incl,
                                            busAccel: data.acc,
                                            /*Status*/
                                            busHumidity: data.seh,
                                            busAirPressure: data.sep,
                                            busAmbientTemp: data.can.AMB_AmbientAirTemp,
                                            busCabinTemp: data.can.AMB_CabInteriorTemp,
                                            busWheelChairStatus: data.can.DC1_Ramp_WheelChairLiftPos,
                                            busDoorStatus: data.can.DC1_PosOfDoors,
                                            busSteeringWheelAngle: data.can.DRIVER_SteeringWheelAngle,
                                            busSteeringWheelTurns: data.can.DRIVER_SteeringWheelAngle/360,
                                            busSpeedLimiterStatus: data.can.EEC2_RoadSpeedLimitStatus,       
                                            busAccelLimiterStatus: data.can.EEC2_VhclAccelerationRateLimitStatus,       
                                            busBrakeStatus: data.can.CCVS_BrakeSwitch,
                                            busParkingBrakeStatus: data.can.CCVS_ParkingBrakeSwitch,
                                            busAccelPedalPosition: data.can.DRIVER_AcceleratorPosition,
                                            busBreakPedalPosition: data.can.DRIVER_BrakePedalPosition,
                                            /*Battery*/
                                            busDCConverterStatus:'',
                                            busBatteryTemp: data.can.BATTERY_AverageCellTemp,
                                            busBatteryCurrent: data.can.BATTERY_BatteryCurrent,
                                            busBatteryPower: data.can.BATTERY_BatteryPower,
                                            busBatteryVoltage: data.can.BATTERY_BatteryVoltage,
                                            busBatteryIsCharging: data.can.STATUS_ChargingType,
                                            busBatteryLevel: data.can.DD_BatteryLevel,
                                            /*Weight*/
                                            busTotalWeight: data.can.CVW_GrossCombinationVehicleWeight,
                                            busWeightAxle: data.can.VW_AxleWeight,     
                                            /*Energy Consumption*/
                                            busConsConverter: data.can.ENE_AUX1_DCDC,
                                            busConsAirComp: data.can.ENE_AUX1_AirCompressor,
                                            busConsHeatPump:data.can.ENE_AUX2_HeatPump,
                                            busConsPowerSteering: data.can.ENE_AUX2_PowerSteering,
                                            busConsDriveMotor: data.can.ENE_MOT_DriveMotor,
                                            /*Energy Efficiency*/
                                            busEnergyMomentEff: data.can.EFFICIENCY_Efficiency,
                                            busEnergyAverEff: data.can.EFFICIENCY_EfficiencyAverage,
                                            busEnergyTotalCharged: data.can.ENERGY_TotalChargedEnergy,
                                            busEnergyTotalDischarged: data.can.ENERGY_TotalDischargedEnergy,
                                            busEnergyTotalExternal: data.can.ENERGY2_TotalExternalCharge,
                                            busEnergyTotalProcAmpHours: data.can.ENERGY2_TotalProcessedAmpHours,
                                            /*Pressure*/
                                            busAirCompStatus: data.can.AIR1_AirCompressorStatus,
                                            busAirSuspPressure: data.can.AIR1_AirSuspensionSupplyPress,           
                                            busCompAirTankPressure: data.can.AIR1_PneumaticSupplyPress,           
                                            busParkingBreakPressure: data.can.AIR1_ParkingAnd_OrTrailerAirPress,           
                                            busRearAxelBrakePressure: data.can.AIR1_ServiceBrakeAirPressCircuit1,           
                                            busFrontAxelBrakePressure: data.can.AIR1_ServiceBrakeAirPressCircuit2,                     
                                            /*Motor*/
                                            busMotorRPM: data.can.EEC1_MotorSpeed,
                                            busMotorTotalOpertationHours: data.can.HOURS_MotorTotalHoursOfOperation,
                                            busMotorAccelLimiterStatus: data.can.MOTOR_AccelerationLimit,
                                            busSlipLimiterStatus: data.can.MOTOR_SlipLimit,
                                            busMotorInstantPower: data.can.MOTOR_Power,
                                            busSlipPersentage: data.can.MOTOR_SlipPercentage, 

                                          }));
    }
    handleClick(event) {
        const id = event.target.id;
        this.setState({
           switchId: id,
        });
    }

    componentDidMount() {
        
       setInterval(this.fetchData.bind(this), 1000);
        
    }
    componentDidUpdate(prevState) {
 
        if (this.state.switchId !== prevState.switchId) {
            this.fetchData(this.state.switchId);
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    componentWillUpdate(){
        window.myMap.setCenter(new window.google.maps.LatLng(this.state.busLat, this.state.busLon));  
        window.myMarker.setPosition(window.myMap.getCenter());  
        console.log("Map is at somewhere: "+this.state.busLat+", "+this.state.busLon);
    }
    

  render() {
      
    return (
        <div>
            <p className="page-title">Sensor Data</p>
        
            <p className="page-descr">Presented sensor data is collected by LLB fleet of electric buses operating in Helsinki and is being fetched in real-time via LLB RESTful API.</p>
            <p className="page-descr">Currently the data is gathered from buses 1612, 3008 and 3009:<br/>
                    <i className="far fa-circle"></i> Bus <b>1612</b> is currently operating on line 23 (route <i>Rautatientori - Alppila - Pasila - Ruskeasuo</i>).<br/>
                    <i className="far fa-circle"></i> Buses <b>3008</b> and <b>3009</b> are operating on line 55 (route <i>Rautatientori - Merihaka - Kalasatama - Kumpula - Koskela</i>).</p>          
            <p className="note-useful">More details on API and LLB Technical Environment can be found in <a href="https://llb.sis.uta.fi/portal/#/app/news" target="_blank">LLB Developer Portal</a></p>
                    
            <div className="select-id"> 
                <p>Bus ID</p>
                <button id="1612" onClick={this.onClick}>1612</button>|
                <button id="3008" onClick={this.onClick}>3008</button>|
                <button id="3009" onClick={this.onClick}>3009</button>
            </div>
                                                                             
            <div className="sensor-data">
                <SensorMap/>

            <div className="data">
                <div className="sensor-block">
                    <input type="checkbox" className="collapsable" id="sensorblock1" />
                    <label className="attribute-title" htmlFor="sensorblock1">General</label>
                    <div className="status-block" id="busID"> 
                        <p id="status-data">{this.state.busId}</p>
                        <p id="status-title">Bus ID</p> 
                    </div>
                    <div className="status-block" id="motion"> 
                        {(this.state.busVehicleMotionStatus = 1)&(this.state.busDirection = 1) ? <p id="status-data">Moving forward</p > : (this.state.busVehicleMotionStatus = 1)&(this.state.busDirection = 0) ? <p id="status-data">Moving in reverse</p> : (this.state.busVehicleMotionStatus = '')&(this.state.busDirection = '') ? <p id="status-data">N/A</p>: <p id="status-data">Stopped</p> }
                        <p id="status-title">Movement status</p> 
                    </div>
                </div>
                <div className="sensor-block">
                        <input type="checkbox" className="collapsable" id="sensorblock2" />
                        <label className="attribute-title" htmlFor="sensorblock2">Speed</label>
                        <div className="status-block"> 
                            <p id="status-data">{this.state.busCurrentGear}</p>
                            <p id="status-title">Current gear</p> 
                        </div> 
                        <div className="status-block"> 
                            <p id="status-data">{this.state.busSpeedWheels} km/h</p>
                            <p id="status-title">Speed (wheels)</p> 
                        </div>  
                        <div className="status-block"> 
                            <p id="status-data">{this.state.busSpeedTachograph} km/h</p>
                            <p id="status-title">Speed (tachograph)</p> 
                        </div> 
                </div>           
                <div className="sensor-block">
                    <input type="checkbox" className="collapsable" id="sensorblock3" />
                    <label className="attribute-title" htmlFor="sensorblock3">Position and location</label>
                    <div className="status-block"> 
                        <p id="status-data">{this.state.busAlt}m</p>
                        <p id="status-title">Altitude</p> 
                    </div> 
                    <div className="status-block"> 
                        <p id="status-data">{this.state.busTrc}m</p>
                        <p id="status-title">Current track</p> 
                    </div> 
                    <div className="status-block"> 
                        <p id="status-data">{this.state.busClimb}m</p>
                        <p id="status-title">Climb</p> 
                    </div>  
                    <div className="status-block"> 
                        <p id="status-data">{this.state.busDist}km</p>
                        <p id="status-title">Total distance</p> 
                    </div>   
                </div>    

                <div className="sensor-block" id="status">
                        <input type="checkbox" className="collapsable" id="sensorblock4" />
                        <label className="attribute-title" htmlFor="sensorblock4">Vehicle status</label>
                        <div className="status-block"> 
                            {this.state.busWheelChairStatus > 0 ? <p id="status-data">Outside</p> : <p id="status-data">In bus</p>}   
                            <p id="status-title">Wheelchair ramp</p> 
                        </div>   
                        <div className="status-block"> 
                            {this.state.busDoorStatus = 2 ? <p id="status-data">Closed</p> : this.state.busDoorStatus = 1 ? <p id="status-data">Closing</p> : <p id="status-data">Open</p> }   
                            <p id="status-title">Doors</p> 
                        </div>   
                        <div className="status-block"> 
                            {this.state.busSpeedLimiterStatus > 0 ? <p id="status-data">On</p> : <p id="status-data">Off</p>}   
                            <p id="status-title">Speed limiter</p> 
                        </div>   
                        <div className="status-block"> 
                            {this.state.busAccelLimiterStatus = 1 ? <p id="status-data">On</p> : <p id="status-data">Off</p>}   
                            <p id="status-title">Acceleration limiter</p> 
                        </div>    
                        <div className="status-block"> 
                            {this.state.busBrakeStatus = 1 ? <p id="status-data">Pressed</p> : <p id="status-data">Released</p>} 
                            <p id="status-title">Brake pedal</p> 
                        </div>     
                        <div className="status-block"> 
                            {this.state.busParkingBrakeStatus = 1 ? <p id="status-data">Engaged</p> : <p id="status-data">Released</p>}   
                            <p id="status-title">Parking brake switch</p> 
                        </div> 
                        <div className="status-block"> 
                            <p id="status-data">{this.state.busSteeringWheelAngle} degrees</p>
                            <p id="status-title">Steering wheel angle</p> 
                        </div>
                        <div className="status-block"> 
                            <p id="status-data">{this.state.busAccelPedalPosition} %</p>
                            <p id="status-title">Acceleration pedal position</p> 
                        </div>
                        <div className="status-block"> 
                             <p id="status-data">{this.state.busCabinTemp} C</p>
                             <p id="status-title">Cabin Temperature</p>  
                        </div> 
                        <div className="status-block"> 
                             <p id="status-data">{this.state.busAmbientTemp} C</p>
                             <p id="status-title">Ambient Temperature</p>  
                        </div>   
                </div>        

                <div className="sensor-block" id="status2">
                        <input type="checkbox" className="collapsable" id="sensorblock5" />
                        <label className="attribute-title" htmlFor="sensorblock5">Battery</label>   
                        <div className="status-block"> 
                            {this.state.busDCConverterStatus = 0 ? <p id="status-data">On</p> : <p id="status-data">Off</p>} 
                            <p id="status-title">DC converter</p> 
                        </div>  
                        <div className="status-block"> 
                            <p id="status-data">{this.state.busBatteryTemp} C</p>
                            <p id="status-title">Temperature</p> 
                        </div>    
                        <div className="status-block">
                            {this.state.busBatteryIsCharging > 0 ? <p id="chart-data"> {this.state.busBatteryLevel}% (charging)</p>:<p id="status-data">{this.state.busBatteryLevel}%  (discharging)</p>}
                             <p id="status-title">Charge level</p>  
                        </div>  
                        <div className="status-block"> 
                            <p id="status-data">{this.state.busBatteryCurrent} A</p>
                            <p id="status-title">In/out Current</p> 
                        </div>      
                        <div className="status-block"> 
                            <p id="status-data">{this.state.busBatteryPower} W</p>
                            <p id="status-title">In/out Power</p> 
                        </div>    
      
                              
                </div>
                <div className="sensor-block">
                    <input type="checkbox" className="collapsable" id="sensorblock6" />
                    <label className="attribute-title" htmlFor="sensorblock6">Energy Consumption</label>
                    <div className="status-block">
                        <p id="status-data">{this.state.busConsConverter}kWh</p>
                         <p id="status-title">DC converter</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busConsAirComp}kWh</p>
                         <p id="status-title">Air compressor</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busConsHeatPump}kWh</p>
                         <p id="status-title">Heat pump</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busConsPowerSteering}kWh</p>
                         <p id="status-title">Power steering</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busConsDriveMotor}Ah</p>
                         <p id="status-title">Drive motor</p>  
                    </div>  
                </div>   
                <div className="sensor-block">
                    <input type="checkbox" className="collapsable" id="sensorblock7" />
                    <label className="attribute-title" htmlFor="sensorblock7">Energy Efficiency</label>
                    <div className="status-block">
                        <p id="status-data">{this.state.busEnergyMomentEff}Wh/km</p>
                         <p id="status-title">Momentary energy efficiency</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busEnergyAverEff}Wh/km</p>
                         <p id="status-title">Average energy efficiency</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busEnergyTotalCharged}kWh</p>
                         <p id="status-title">Charged in Total</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busEnergyTotalDischarged}kWh</p>
                         <p id="status-title">Discharged in Total</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busEnergyTotalExternal}Ah</p>
                         <p id="status-title">External Charge in Total</p>  
                    </div>  
                    <div className="status-block">
                        <p id="status-data">{this.state.busEnergyTotalProcAmpHours}Ah</p>
                         <p id="status-title">Proccessed Amp Hours in Total</p>  
                    </div>  
                </div>      
                <div className="sensor-block">
                    <input type="checkbox" className="collapsable" id="sensorblock8" />
                    <label className="attribute-title" htmlFor="sensorblock8">Pressure</label>
       
                    <div className="status-block">
                        {this.state.busAirCompStatus = 0 ? <p id="status-data">On</p> : <p id="status-data">Off</p>}
                        <p id="status-title">Air compressor</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busAirSuspPressure}Wh/km</p>
                         <p id="status-title">Air suspension supply</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busCompAirTankPressure}kPa</p>
                         <p id="status-title">Compressed airtank</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busParkingBreakPressure}kPa</p>
                         <p id="status-title">Parking brake circuit</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busRearAxelBrakePressure}kPa</p>
                         <p id="status-title">Rear axle brake circuit</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busFrontAxelBrakePressure}kPa</p>
                         <p id="status-title">Front axle brake circuit</p>  
                    </div>   
                </div>        
                <div className="sensor-block" id="lastblock">
                    <input type="checkbox" className="collapsable" id="sensorblock9" />
                    <label className="attribute-title" htmlFor="sensorblock9">Motor</label>
       
                    <div className="status-block">
                        {this.state.busAirCompStatus = 0 ? <p id="status-data">On</p> : <p id="status-data">Off</p>}
                        <p id="status-title">Air compressor</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busMotorRPM}rpm</p>
                         <p id="status-title">Electric motor rpm</p>  
                    </div> 
                    <div className="status-block">
                        {this.state.busMotorAccelLimiterStatus = 0 ? <p id="status-data">On</p> : <p id="status-data">Off</p>}
                         <p id="status-title">Acceleration limiter</p>  
                    </div> 
                    <div className="status-block">
                        {this.state.busSlipLimiterStatus = 0 ? <p id="status-data">On</p> : <p id="status-data">Off</p>}
                         <p id="status-title">Slip limiter</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busMotorInstantPower}kPa</p>
                         <p id="status-title">Rear axle brake circuit</p>  
                    </div> 
                    <div className="status-block">
                        <p id="status-data">{this.state.busSlipPersentage}kPa</p>
                         <p id="status-title">Slip</p>  
                    </div>   
                </div>                            
           </div>
                                         </div>
</div>
    );
  }
}

export default SensorData;
