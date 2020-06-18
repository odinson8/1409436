///*
//package com.Database;
//
//import kong.unirest.HttpResponse;
//import kong.unirest.Unirest;
//import kong.unirest.UnirestException;
//
//import java.sql.*;
//import java.util.ArrayList;
//
//public class Main {
//
//    public static void main(String[] args) throws SQLException {
//        ArrayList<String> allOrgsInDB = getOrgsInDB();
//
//        String allOrgsInJira= getAllOrganizationsInJira();
//
//        for (String org:allOrgsInDB){
//            if (!allOrgsInJira.contains(org)){
//                //Burada hata olabilir
//                addOrganizationtoJira(org);
//            }
//        }
//
//        for(int i=1696;i<=2200;i++){
//            String result=addToProject(String.valueOf(i));
//            if (result.contains("errorMessage")){
//                break;
//            }
//        }
//    }
//
//    private static ArrayList<String> getOrgsInDB() throws SQLException {
//        Connection conn = null;
//        ArrayList<String> customerListInDB = new ArrayList<String>();
//
//        try {
//            DriverManager.registerDriver(new oracle.jdbc.OracleDriver());
//            conn = DriverManager.getConnection(Constants.EXADB_URL, Constants.DB_USERNAME, Constants.EXADB_PASSWORD);
//            if (conn != null) {
//                System.out.println("Connected to the database!");
//                Statement stmt;
//
//                    stmt = conn.createStatement();
//                    ResultSet rs = stmt.executeQuery(Constants.SQL);
//                    int count=0;
//                    while (rs.next()) {
//                        count++;
//                        try {
//                            //Object ID = rs.getObject(1);
//                            Object CUSTOMER_NAME = rs.getObject(2);
//                            if (CUSTOMER_NAME!=null){
//                                String customerName = CUSTOMER_NAME.toString();
//                                customerListInDB.add(customerName);
//                            }
//                        } catch (Exception e) {
//                            e.printStackTrace();
//                        }
//                    }
//                System.out.println("COUNT" + count);
//            } else {
//                System.out.println("Failed to make connection!");
//            }
//
//        } catch (SQLException e) {
//            System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        finally {
//            conn.close();
//        }
//        return customerListInDB;
//    }
//
//    private static void addOrganizationtoJira(String organizationName) {
//
//        System.out.println("ADDING    " + organizationName);
//
//        HttpResponse<String> response = null;
//        try {
//            Unirest.config().verifySsl(false);
//            String body = "{\r\n    \"name\": \"XXX\"\r\n}";
//            body = body.replace("XXX",organizationName);
//            response = Unirest.post(Constants.REST_SERVICEDESKAPI_ORGANIZATION)
//                    .header("X-ExperimentalApi", "opt-in")
//                    .header("Content-Type", "application/json")
//                    .header("Authorization", Constants.Authorization)
//                    .body(body)
//                    .asString();
//        } catch (UnirestException e) {
//            System.out.println("error" + e.getMessage());
//            e.printStackTrace();
//        }
////        System.out.println(response.getBody());
//        System.out.println(response.getStatus());
////        System.out.println(response.getStatusText());
//    }
//    private static String getAllOrganizationsInJira() {
//        HttpResponse<String> response = null;
//        int counter=0;
//        int increment = 50;
//
//        StringBuilder sb= new StringBuilder();
//        do{
//            try {
//                Unirest.config().verifySsl(false);
//
//                response = Unirest.get(Constants.REST_SERVICEDESKAPI_ORGANIZATION)
//                        .header("X-ExperimentalApi", "opt-in")
//                        .header("Content-Type", "application/json")
//                        .header("Authorization", Constants.Authorization)
//                        .queryString("start",counter)
//                        .queryString("limit",String.valueOf(increment))
//                        .asString();
//                System.out.println("counter" + counter);
//
//            } catch (UnirestException e) {
//                System.out.println("error" + e.getMessage());
//                e.printStackTrace();
//            }
//            counter+= increment;
//            sb.append(response.getBody());
//
//        } while (!response.getBody().contains("isLastPage\":true") || counter > Constants.OrgMaxLimit);
//
//        String resultSet = sb.toString();
//        System.out.println(resultSet);
//        return resultSet;
////        System.out.println(response.getBody());
////        System.out.println(response.getStatus());
////        System.out.println(response.getStatusText());
//    }
//
//    private static String addToProject(String orgId) {
//        System.out.println("Adding org with this id to the project = "+orgId);
//        HttpResponse<String> response = null;
//        try {
//            Unirest.config().verifySsl(false);
//            String s = "{\r\n    \"organizationId\": XXX\r\n}";
//            s = s.replace("XXX",orgId);
//            response = Unirest.post(Constants.REST_SERVICEDESKAPI_SERVICEDESK_PROJECT_ORGANIZATION)
//                    .header("X-ExperimentalApi", "opt-in")
//                    .header("Content-Type", "application/json")
//                    .header("Authorization", Constants.Authorization)
//                    .body(s)
//                    .asString();
//
//        } catch (UnirestException e) {
//            System.out.println("error =" + e.getMessage());
//            e.printStackTrace();
//        }
//        String body = response.getBody();
//        System.out.println(body);
//        return body;
//    }
//}
//*/
