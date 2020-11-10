import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { Container, Nav } from '../../styled-components';
import Dropdown from 'react-dropdown';
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import ReactFC from "react-fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import { Event } from "../Tracking";

ReactFC.fcRoot(FusionCharts, Charts, Maps, Column2D, PowerCharts, FusionTheme);

const HomePage = () => (
    <RevenueDatabase />
);

class revenueData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            revenue: [],
            revenuesTrendCountry: [],
            revenuesTrendCompany: [],
            sunBurstData: [],
            dropdownOption: [],
            AppleRevenue: null,
            SamsungRevenue: null,
            MicromaxRevenue: null,
            SonyRevenue: null,
            VURevenue: null,
            SanyoRevenue: null,
            TCLRevenue: null,
            LenovoRevenue: null,
            CompactRevenue: null,
            HPRevenue: null,
            GERevenue: null,
            GoogleRevenue: null,
            FacbookRevenue: null,
            TataRevenue: null,
            RelianceRevenue: null,
            BoeingREvenue: null,
            AirbusRevenue: null,
            USAmarketCovRate: " ",
            InmarketCovRate: " ",
            SwmarketCovRate: " ",
            UKmarketCovRate: " ",
            FinmarketCovRate: " ",
            totalRevenue: null,
            selectedValue: null,
            InRevenue: null,
            USARevenue: null,
            UKRevenue: null,
            SwRevenue: null,
            FiRevenue: null,
            totalRevenueinMillion: null,
            companyWithMaxRevenue: "",
            maxRevenue: null,
            maxRevenueCountry: null,
            countryWithMaxRevenue: ""
        };
    }
    getData = arg => {
        const arr = this.state.revenue;
        const arrlen = arr.length;
        let selectedValue = null;
        let AppleRevenue = 0;
        let SamsungRevenue = 0;
        let MicromaxRevenue = 0;
        let SonyRevenue = 0;
        let VURevenue = 0;
        let SanyoRevenue = 0;
        let TCLRevenue = 0;
        let LenovoRevenue = 0;
        let CompactRevenue = 0;
        let HPRevenue = 0;
        let GERevenue = 0;
        let GoogleRevenue = 0;
        let FacbookRevenue = 0;
        let TataRevenue = 0;
        let RelianceRevenue = 0;
        let BoeingREvenue = 0;
        let AirbusRevenue = 0;
        let maxRevenue = 0;
        let companyWithMaxRevenue = "";
        let maxRevenueCountry = 0;
        let countryWithMaxRevenue = ""
        selectedValue = arg;
        for (let i = 0; i < arrlen; i++) {
            let key = Object.keys(arr[i])[0];
            let value = Object.values(arr[i])[0];

            if (key === "Apple") {
                AppleRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Samsung") {
                SamsungRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Micromax") {
                MicromaxRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Sony") {
                SonyRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "VU") {
                VURevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Sanyo") {
                SanyoRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "TCL") {
                TCLRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Lenovo") {
                LenovoRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Compact") {
                CompactRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "HP") {
                HPRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "GE") {
                GERevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Google") {
                GoogleRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Facebook") {
                FacbookRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Tata") {
                TataRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Reliance") {
                RelianceRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Boeing") {
                BoeingREvenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
            else if (key === "Airbus") {
                AirbusRevenue = parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenue < parseInt(value[arg].toString().split(',').join(''))) {
                    maxRevenue = parseInt(value[arg].toString().split(',').join(''));
                    companyWithMaxRevenue = key;
                }
            }
        }

        let USAmarketCovRate = 0;
        let InmarketCovRate = 0;
        let SwmarketCovRate = 0;
        let UKmarketCovRate = 0;
        let FinmarketCovRate = 0;
        let revenuesTrendCountry = [];
        let USARevenue = 0;
        let InRevenue = 0;
        let UKRevenue = 0;
        let SwRevenue = 0;
        let FiRevenue = 0;
        let totalRevenue = 0;

        let revenuesTrendCompany = [];
        let SunBurstData = [];
        let comid = 1;
        for (let i = 0; i < arrlen; i++) {
            let value = Object.values(arr[i])[0];
            let key = Object.keys(arr[i])[0];
            revenuesTrendCompany.push({
                label: key,
                value: parseInt(value[arg].toString().split(',').join(''))
            });

            if (value.Country === 'USA') {
                USARevenue += parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenueCountry < USARevenue) {
                    maxRevenueCountry = USARevenue;
                    countryWithMaxRevenue = "USA";
                }
                let id = "2." + comid;
                SunBurstData.push({
                    id: id,
                    parent: "1.1",
                    name: key,
                    value: parseInt(value[arg].toString().split(',').join(''))
                });


            }
            else if (value.Country === 'India') {
                InRevenue += parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenueCountry < InRevenue) {
                    maxRevenueCountry = InRevenue;
                    countryWithMaxRevenue = "India";
                }
                let id = "2." + comid;
                SunBurstData.push({
                    id: id,
                    parent: "1.2",
                    name: key,
                    value: parseInt(value[arg].toString().split(',').join(''))
                });

            }
            else if (value.Country === 'UK') {
                UKRevenue += parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenueCountry < UKRevenue) {
                    maxRevenueCountry = UKRevenue;
                    countryWithMaxRevenue = "UK";
                }
                let id = "2." + comid;
                SunBurstData.push({
                    id: id,
                    parent: "1.3",
                    name: key,
                    value: parseInt(value[arg].toString().split(',').join(''))
                });

            }
            else if (value.Country === 'Sweden') {
                SwRevenue += parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenueCountry < SwRevenue) {
                    maxRevenueCountry = SwRevenue;
                    countryWithMaxRevenue = "Sweden";
                }
                let id = "2." + comid;
                SunBurstData.push({
                    id: id,
                    parent: "1.4",
                    name: key,
                    value: parseInt(value[arg].toString().split(',').join(''))
                });
            }
            else if (value.Country === 'Finland') {
                FiRevenue += parseInt(value[arg].toString().split(',').join(''));
                if (maxRevenueCountry < FiRevenue) {
                    maxRevenueCountry = FiRevenue;
                    countryWithMaxRevenue = "Finland";
                }
                let id = "2." + comid;
                SunBurstData.push({
                    id: id,
                    parent: "1.5",
                    name: key,
                    value: parseInt(value[arg].toString().split(',').join(''))
                });
            }
            comid = comid + 1;
        }
        totalRevenue = USARevenue + InRevenue + UKRevenue + SwRevenue + FiRevenue;
        USAmarketCovRate = USARevenue * 100 / (totalRevenue);
        InmarketCovRate = InRevenue * 100 / (totalRevenue);
        SwmarketCovRate = SwRevenue * 100 / (totalRevenue);
        UKmarketCovRate = UKRevenue * 100 / (totalRevenue);
        FinmarketCovRate = FiRevenue * 100 / (totalRevenue);
        SunBurstData.push(
            { id: "0.0", parent: "", name: "Countries", value: totalRevenue }, { id: "1.1", parent: "0.0", name: "USA", value: USARevenue },
            { id: "1.2", parent: "0.0", name: "India", value: InRevenue }, { id: "1.3", parent: "0.0", name: "UK", value: UKRevenue },
            { id: "1.4", parent: "0.0", name: "Sweden", value: SwRevenue }, { id: "1.5", parent: "0.0", name: "Finland", value: FiRevenue }
        );
        revenuesTrendCountry.push({ label: "USA", value: USARevenue },
            { label: "India", value: InRevenue }, { label: "UK", value: UKRevenue },
            { label: "Sweden", value: SwRevenue }, { label: "Finland", value: FiRevenue });
        this.setState({
            USAmarketCovRate: USAmarketCovRate,
            InmarketCovRate: InmarketCovRate,
            SwmarketCovRate: SwmarketCovRate,
            UKmarketCovRate: UKmarketCovRate,
            FinmarketCovRate: FinmarketCovRate,
            revenuesTrendCountry: revenuesTrendCountry,
            revenuesTrendCompany: revenuesTrendCompany,
            totalRevenue: totalRevenue,
            totalRevenueinMillion: (totalRevenue / 1000000).toFixed(2),
            selectedValue: selectedValue,
            InRevenue: InRevenue,
            USARevenue: USARevenue,
            UKRevenue: UKRevenue,
            SwRevenue: SwRevenue,
            FiRevenue: FiRevenue,
            AppleRevenue: AppleRevenue, SamsungRevenue: SamsungRevenue, MicromaxRevenue: MicromaxRevenue,
            CompactRevenue: CompactRevenue, SonyRevenue: SonyRevenue, VURevenue: VURevenue,
            SanyoRevenue: SanyoRevenue, TCLRevenue: TCLRevenue, LenovoRevenue: LenovoRevenue,
            HPRevenue: HPRevenue, GERevenue: GERevenue, GoogleRevenue: GoogleRevenue,
            FacbookRevenue: FacbookRevenue, TataRevenue: TataRevenue, RelianceRevenue: RelianceRevenue,
            BoeingREvenue: BoeingREvenue, AirbusRevenue: AirbusRevenue,
            maxRevenue: maxRevenue > 1000000 ? (maxRevenue / 1000000).toFixed(2) + "M" : (maxRevenue / 1000).toFixed(2) + "K",
            companyWithMaxRevenue: companyWithMaxRevenue,
            maxRevenueCountry: maxRevenueCountry > 1000000 ? (maxRevenueCountry / 1000000).toFixed(2) + "M" : (maxRevenueCountry / 1000).toFixed(2) + "K",
            countryWithMaxRevenue: countryWithMaxRevenue,
            sunBurstData: SunBurstData
        });


    };

    updateDashboard = (event) => {
        this.getData(event.value);
        this.setState({ selectedValue: event.value });
        Event("Revenue Insights", "Revenue Insights for " + event.value, "Revenue Insights");
    }


    componentDidMount() {
        const dbs = this.props.firebase.db;
        const revenuedata = [];
        dbs.collection("Revenues").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let obj = {};
                    obj[doc.id] = doc.data();
                    revenuedata.push(obj);

                });
                let dropdownOption = [];
                dropdownOption.push("January");
                dropdownOption.push("February");
                dropdownOption.push("March");
                dropdownOption.push("April");
                dropdownOption.push("May");
                dropdownOption.push("June");
                dropdownOption.push("July");
                dropdownOption.push("August");
                dropdownOption.push("September");
                dropdownOption.push("October");
                dropdownOption.push("November");
                dropdownOption.push("December");

                this.setState({
                    revenue: revenuedata,
                    dropdownOption: dropdownOption
                },
                    () => this.getData("February")
                );
            })
            .catch((error) => {
                console.log("Error getting document: ", error);
            });
    }


    render() {
        return (
            <Container>
                <Nav className="navbar navbar-expand nav-secondary fixed-top is-dark is-light-text">
                    <Container className="text-medium" >Revenue Dashboard</Container>
                    <Container className="navbar-nav ml-auto">
                        <Dropdown
                            className="pr-2 custom-dropdown"
                            options={this.state.dropdownOption}
                            onChange={this.updateDashboard}
                            value={this.state.selectedValue}
                            placeholder="Select an option"
                        />
                    </Container>
                </Nav>

                <Container className="container-fluid px-5 py-5" >
                    <Container className="row" >
                        <Container className="col-md-4 col-lg-3 is-light-text mb-4">
                            <Container className="card grid-card is-card-dark">
                                <Container className="card-heading mb-0">
                                    <Container className="is-dark-text-light letter-spacing text-small">
                                        Total Revenue
                                </Container>
                                </Container>
                                <Container className="card-value  pt-0 text-x-large">
                                    <span className="text-large pr-1">$</span>
                                    {this.state.totalRevenueinMillion}
                                    <span className="text-large pr-1">M</span>
                                </Container>
                                <Container className="card-heading mt-5">
                                    <Container className="is-dark-text-light letter-spacing text-small">
                                        Country with Maximum Revenue
                                </Container>
                                </Container>
                                <Container className="card-value  pt-0 text-x-large">
                                    {this.state.countryWithMaxRevenue} -
                                    <span className="text-large px-1">$</span>
                                    {this.state.maxRevenueCountry}
                                </Container>
                                <Container className="card-heading mt-5">
                                    <Container className="is-dark-text-light letter-spacing text-small">
                                        Company with Maximum Revenue
                                </Container>
                                </Container>
                                <Container className="card-value  pt-0 text-x-large">
                                    {this.state.companyWithMaxRevenue} -
                                    <span className="text-large px-1">$</span>
                                    {this.state.maxRevenue}
                                </Container>
                            </Container>
                        </Container>
                        <Container className="col-md-8 col-lg-9 is-light-text mb-4">
                            <Container className="card is-card-dark chart-card">
                                <Container className="row full-height">
                                    <Container className="col-sm-4 full-height">
                                        <Container className="chart-container full-height">
                                            <ReactFC
                                                {...{
                                                    type: 'Pie3D',
                                                    width: 1000,
                                                    height: 400,
                                                    dataFormat: 'json',
                                                    dataSource: {
                                                        chart: {
                                                            "caption": "Company-Wise Revenue Share",
                                                            "subCaption": "(in given month)",
                                                            "showValues": "1",
                                                            "showPercentInTooltip": "0",
                                                            "numberPrefix": "$",
                                                            "enableMultiSlicing": "1",
                                                            "theme": "fusion",
                                                            "bgColor": "#B0C4DE",
                                                            "bgAlpha": "50"
                                                        },
                                                        data: this.state.revenuesTrendCompany
                                                    }
                                                }

                                                }
                                            />
                                        </Container>
                                    </Container>

                                </Container>
                            </Container>
                        </Container>
                    </Container>
                    <Container className="row" style={{ minHeight: '150px' }}>
                        <Container className="col-md-4 col-lg-3 is-light-text mb-4">
                            <Container className="card grid-card is-card-dark">
                                <Container className="chart-container full-height">
                                    <ReactFC
                                        {...{
                                            type: "doughnut2d",
                                            width: "100%",
                                            height: "100%",
                                            dataFormat: "json",
                                            dataSource: {
                                                chart: {
                                                    caption: "India",
                                                    subCaption: "Revenue Share",
                                                    enableRotation: "1",
                                                    subCaptionFontSize: "11",
                                                    captionAlignment: "left",
                                                    basefontsize: "11",
                                                    theme: "fusion",
                                                    startingAngle: "270",
                                                    captionpadding: "0",
                                                    defaultCenterLabel: 'India Coverage',
                                                    paletteColors: "#3B70C4, #000000",
                                                    "bgColor": "#A9A9A9",
                                                    "bgAlpha": "50"
                                                },
                                                data: [
                                                    {
                                                        label: "India",
                                                        value: `${this.state.InmarketCovRate}%`
                                                    },
                                                    {
                                                        label: "Others",
                                                        alpha: 5,
                                                        value: `${100 - this.state.InmarketCovRate}`
                                                    }
                                                ]
                                            }
                                        }}
                                    />
                                </Container>

                            </Container>
                        </Container>
                        <Container className="col-md-8 col-lg-9 is-light-text mb-4">
                            <Container className="card is-card-dark chart-card">
                                <Container className="row full-height">
                                    <Container className="col-sm-3 full-height">
                                        <Container className="chart-container full-height">
                                            <ReactFC
                                                {...{
                                                    type: "doughnut2d",
                                                    width: "100%",
                                                    height: "100%",
                                                    dataFormat: "json",
                                                    dataSource: {
                                                        chart: {
                                                            caption: "UK",
                                                            subCaption: "Revenue Share",
                                                            enableRotation: "1",
                                                            subCaptionFontSize: "11",
                                                            captionAlignment: "left",
                                                            basefontsize: "11",
                                                            theme: "fusion",
                                                            captionpadding: "0",
                                                            defaultCenterLabel: 'UK Coverage',
                                                            paletteColors: "#3B70C4, #000000",
                                                            "bgColor": "#FF7F50",
                                                            "bgAlpha": "50"
                                                        },
                                                        data: [
                                                            {
                                                                label: "UK",
                                                                value: `${this.state.UKmarketCovRate}%`
                                                            },
                                                            {
                                                                label: "Others",
                                                                alpha: 5,
                                                                value: `${100 - this.state.USAmarketCovRate}`
                                                            }
                                                        ]
                                                    }
                                                }}
                                            />
                                        </Container>
                                    </Container>
                                    <Container className="col-sm-3 full-height">
                                        <Container className="chart-container full-height">
                                            <ReactFC
                                                {...{
                                                    type: "doughnut2d",
                                                    width: "100%",
                                                    height: "100%",
                                                    dataFormat: "json",
                                                    dataSource: {
                                                        chart: {
                                                            caption: "USA",
                                                            subCaption: "Revenue Share",
                                                            enableRotation: "1",
                                                            subCaptionFontSize: "10",
                                                            captionAlignment: "left",
                                                            basefontsize: "11",
                                                            theme: "fusion",
                                                            showpercentvalues: "1",
                                                            captionpadding: "0",
                                                            defaultCenterLabel: 'USA Coverage',
                                                            paletteColors: "#3B70C4, #000000",
                                                            "bgColor": "#A9A9A9",
                                                            "bgAlpha": "50"
                                                        },
                                                        data: [
                                                            {
                                                                label: "USA",
                                                                value: `${this.state.USAmarketCovRate}%`
                                                            },
                                                            {
                                                                label: "Others",
                                                                alpha: 5,
                                                                value: `${100 - this.state.USAmarketCovRate}`
                                                            }
                                                        ]
                                                    }
                                                }}
                                            />
                                        </Container>
                                    </Container>
                                    <Container className="col-sm-3 full-height">
                                        <Container className="chart-container full-height">
                                            <ReactFC
                                                {...{
                                                    type: "doughnut2d",
                                                    width: "100%",
                                                    height: "100%",
                                                    dataFormat: "json",
                                                    dataSource: {
                                                        chart: {
                                                            caption: "Finland",
                                                            subCaption: "Revenue Share",
                                                            enableRotation: "1",
                                                            subCaptionFontSize: "10",
                                                            captionAlignment: "left",
                                                            basefontsize: "11",
                                                            theme: "fusion",

                                                            captionpadding: "0",
                                                            defaultCenterLabel: 'Finland Coverage',
                                                            paletteColors: "#3B70C4, #000000",
                                                            "bgColor": "#FF7F50",
                                                            "bgAlpha": "50"
                                                        },
                                                        data: [
                                                            {
                                                                label: "Finland",
                                                                value: `${this.state.FinmarketCovRate}%`
                                                            },
                                                            {
                                                                label: "Others",
                                                                alpha: 5,
                                                                value: `${100 - this.state.FinmarketCovRate}`
                                                            }
                                                        ]
                                                    }
                                                }}
                                            />
                                        </Container>
                                    </Container>
                                    <Container className="col-sm-3 full-height">
                                        <Container className="chart-container full-height">
                                            <ReactFC
                                                {...{
                                                    type: "doughnut2d",
                                                    width: "100%",
                                                    height: "100%",
                                                    dataFormat: "json",
                                                    dataSource: {
                                                        chart: {
                                                            caption: "Sweden",
                                                            subCaption: "Revenue Share",
                                                            enableRotation: "1",
                                                            subCaptionFontSize: "10",
                                                            captionAlignment: "left",
                                                            basefontsize: "11",
                                                            theme: "fusion",
                                                            showpercentvalues: "1",
                                                            captionpadding: "0",
                                                            defaultCenterLabel: 'Sweden Coverage',
                                                            paletteColors: "#3B70C4, #000000",
                                                            "bgColor": "#A9A9A9",
                                                            "bgAlpha": "50"
                                                        },
                                                        data: [
                                                            {
                                                                label: "Sweden",
                                                                value: `${this.state.SwmarketCovRate}%`
                                                            },
                                                            {
                                                                label: "Others",
                                                                alpha: 5,
                                                                value: `${100 - this.state.SwmarketCovRate}`
                                                            }
                                                        ]
                                                    }
                                                }}
                                            />
                                        </Container>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                    <Container className="row" style={{ minHeight: "400px" }}>
                        <Container className="col-md-6 mb-4">
                            <Container className="card is-card-dark chart-card">
                                <Container className="chart-container large full-height">
                                    <ReactFC
                                        {...{
                                            type: "column2D",
                                            width: "650",
                                            height: "400",
                                            dataFormat: "json",
                                            dataSource: {
                                                chart: {
                                                    theme: "fusion",
                                                    caption: "Country-Wise Revenue Generation",
                                                    subCaption: "(in given month)",
                                                    xAxisName: "Country",
                                                    yAxisName: "Revenue($)",
                                                    bgColor: "#B0C4DE",
                                                    bgAlpha: "50",
                                                    divLineAlpha: "1",
                                                    showAlternateHGridColor: "1",
                                                    alternateHGridColor: "#ffcccc",
                                                    alternateHGridAlpha: "50",
                                                    divLineColor: "#33ccff"
                                                },
                                                data: this.state.revenuesTrendCountry
                                            }
                                        }}
                                    />
                                </Container>
                            </Container>
                        </Container>
                        <Container className="col-md-6 mb-4">
                            <Container className="card is-card-dark chart-card">
                                <Container className="chart-container large full-height">
                                    <ReactFC
                                        {...{
                                            type: "multilevelpie",
                                            width: "650",
                                            height: "400",
                                            dataFormat: "json",
                                            dataSource: {
                                                chart: {
                                                    theme: "fusion",
                                                    caption: "Revenues by Company's Location",
                                                    subCaption: "(in given month)",
                                                    showplotborder: "1",
                                                    plotfillalpha: "60",
                                                    hoverfillcolor: "#CCCCCC",
                                                    basefontsize: "10",
                                                    numberprefix: "$",
                                                    centerAngle: "300",
                                                    plottooltext:
                                                        "Revenue of <b>$label</b> was <b>$$valueK</b>, which was $percentValue of parent category",
                                                    bgColor: "#827865",
                                                    bgAlpha: "50"
                                                },
                                                category: [
                                                    {
                                                        label: "Countries",
                                                        tooltext: "Please hover over a sub-category to see details",
                                                        color: "#ffffff",
                                                        value: this.state.totalRevenue / 1000,
                                                        category: [
                                                            {
                                                                label: "India",
                                                                color: "#f8bd19",
                                                                value: this.state.InRevenue / 1000,
                                                                category: [
                                                                    {
                                                                        label: "Samsung",
                                                                        color: "#f8bd19",
                                                                        value: this.state.SamsungRevenue / 1000
                                                                    },
                                                                    {
                                                                        label: "Lenovo",
                                                                        color: "#f8bd19",
                                                                        value: this.state.LenovoRevenue / 1000
                                                                    },
                                                                    {
                                                                        label: "GE",
                                                                        color: "#f8bd19",
                                                                        value: this.state.GERevenue / 1000
                                                                    },
                                                                    {
                                                                        label: "Reliance",
                                                                        color: "#f8bd19",
                                                                        value: this.state.RelianceRevenue / 1000
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                label: "USA",
                                                                color: "#33ccff",
                                                                value: this.state.USARevenue / 1000,
                                                                category: [
                                                                    {
                                                                        label: "Apple",
                                                                        color: "#33ccff",
                                                                        value: this.state.AppleRevenue / 1000
                                                                    },
                                                                    {
                                                                        label: "VU",
                                                                        color: "#33ccff",
                                                                        value: this.state.VURevenue / 1000
                                                                    },
                                                                    {
                                                                        label: "Sanyo",
                                                                        color: "#33ccff",
                                                                        value: this.state.SanyoRevenue / 1000
                                                                    },
                                                                    {
                                                                        label: "Facebook",
                                                                        color: "#33ccff",
                                                                        value: this.state.FacbookRevenue / 1000
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                label: "UK",
                                                                color: "ffcccc",
                                                                value: this.state.UKRevenue / 1000,
                                                                category: [
                                                                    {
                                                                        label: "Micromax",
                                                                        color: "ffcccc",
                                                                        value: this.state.MicromaxRevenue / 1000
                                                                    },
                                                                    {
                                                                        label: "TCL",
                                                                        color: "ffcccc",
                                                                        value: this.state.TCLRevenue / 1000
                                                                    },
                                                                    {
                                                                        label: "HP",
                                                                        color: "ffcccc",
                                                                        value: this.state.HPRevenue / 1000
                                                                    },
                                                                    {
                                                                        label: "Google",
                                                                        color: "ffcccc",
                                                                        value: this.state.GoogleRevenue / 1000
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                label: "Sweden",
                                                                color: "#ccff66",
                                                                value: this.state.SwRevenue / 1000,
                                                                category: [
                                                                    {
                                                                        label: "Sony",
                                                                        color: "#ccff66",
                                                                        value: this.state.SonyRevenue / 1000
                                                                    },
                                                                    {
                                                                        label: "Tata",
                                                                        color: "#ccff66",
                                                                        value: this.state.TataRevenue / 1000
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                label: "Finland",
                                                                color: "#29A6A6",
                                                                value: this.state.FiRevenue / 1000,
                                                                category: [
                                                                    {
                                                                        label: "Compact",
                                                                        color: "#29A6A6",
                                                                        value: this.state.CompactRevenue / 1000
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }}
                                    />

                                </Container>
                            </Container>
                        </Container>
                    </Container >
                    <Container className="row" style={{ minHeight: "400px" }}>
                        <Container className="col-md-6 mb-4">
                            <Container className="card is-card-dark chart-card">
                                <Container className="chart-container large full-height">
                                    <ReactFC
                                        {...{
                                            type: "sunburst",
                                            width: "650",
                                            height: "400",
                                            dataFormat: "json",
                                            dataSource: {
                                                chart: {
                                                    theme: "fusion",
                                                    caption: "Total Revenue in given month",
                                                    subCaption: "Click on the segments to Drill-down for region-wise revenue distribution",
                                                    showplotborder: "1",
                                                    numberPrefix: "$",
                                                    bgColor: "#827865",
                                                    bgAlpha: "50",
                                                },
                                                data: this.state.sunBurstData
                                            }
                                        }}
                                    />

                                </Container>
                            </Container>
                        </Container>
                        <Container className="col-md-6 mb-4">
                            <Container className="card is-card-dark chart-card">
                                <Container className="chart-container large full-height">

                                    <ReactFC
                                        {...{
                                            type: "column2D",
                                            width: "650",
                                            height: "400",
                                            dataFormat: "json",
                                            dataSource: {
                                                chart: {
                                                    theme: "fusion",
                                                    caption: "Company-Wise Revenue Generation",
                                                    subCaption: "(in given month)",
                                                    numberPrefix: "$",
                                                    xAxisName: "Company",
                                                    yAxisName: "Revenue",
                                                    bgColor: "#B0C4DE",
                                                    bgAlpha: "50",
                                                    divLineAlpha: "1",
                                                    showAlternateHGridColor: "1",
                                                    alternateHGridColor: "#ffcccc",
                                                    alternateHGridAlpha: "50",
                                                    divLineColor: "#33ccff"
                                                },
                                                data: this.state.revenuesTrendCompany
                                            }
                                        }}
                                    />
                                </Container>
                            </Container>
                        </Container>
                    </Container >
                </Container>
            </Container>
        );
    }
}

const RevenueDatabase = withFirebase(revenueData);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
