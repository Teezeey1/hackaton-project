export interface Model{
    county:string;
    county_fips:string;
    state:string;
    county_population:number;
    health_service_area_number:number;
    health_service_area:string;
    health_service_area_population:number;
    covid_inpatient_bed_utilization:number;
    covid_hospital_admission_per_100k:number;
    covid_cases_per_100k:number
    covid_19_community_level:string;
    date_updated:Date;
}