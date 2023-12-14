 var width = 500, height = 500;
        var TP = 626, FP = 12, TN = 26, FN = 302;

        var counter = {
            TP_Count: 0,
            FP_Count: 0,
            TN_Count: 0,
            FN_Count: 0

        }

    var data1 = [['Loan_ID', 'Gender', 'Married', 'Dependents', 'Education', 'Self_Employed', 'ApplicantIncome', 'CoapplicantIncome', 'LoanAmount', 'Loan_Amount_Term', 'Credit_History', 'Property_Area', 'Pred_Loan_Status', 'Target_Loan_Status', 'Pred_True_Pos', 'Pred_True_Neg', 'Pred_False_Pos', 'Pred_False_Neg', 'Scatterplot_X', 'Scatterplot_Y', '', '', ''], ['LP002139', 'Male', 'Yes', '0', 'Graduate', 'No', '9083', '0', '228', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.281532', '5.360031', '', '-6.101728', '-10.436089'], ['LP002223', 'Male', 'Yes', '0', 'Graduate', 'No', '4310', '0', '130', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.625398', '4.7233844', '', '16.314945', '11.846542'], ['LP001570', 'Male', 'Yes', '2', 'Graduate', 'No', '4167', '1447', '158', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.428297', '-0.2152897', '', '', ''], ['LP002978', 'Female', 'No', '0', 'Graduate', 'No', '2900', '0', '71', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '10.232842', '-3.7319462', '', '', ''], ['LP001478', 'Male', 'No', '0', 'Graduate', 'No', '2718', '0', '70', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.250168', '5.5331874', '', '', ''], ['LP002877', 'Male', 'Yes', '1', 'Graduate', 'No', '1782', '2232', '107', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.978566', '0.5087905', '', '', ''], ['LP002035', 'Male', 'Yes', '2', 'Graduate', 'No', '3717', '0', '120', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '3.6229262', '0.14833769', '', '', ''], ['LP001005', 'Male', 'Yes', '0', 'Graduate', 'Yes', '3000', '0', '66', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.455564', '16.180101', '', '', ''], ['LP002115', 'Male', 'Yes', '3+', 'Not Graduate', 'No', '2647', '1587', '173', '360', '1', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '7.1106977', '-0.3276789', '', '', ''], ['LP001259', 'Male', 'Yes', '1', 'Graduate', 'Yes', '1000', '3022', '110', '360', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '9.483975', '1.4946613', '', '', ''], ['LP001732', 'Male', 'Yes', '2', 'Graduate', '', '5000', '0', '72', '360', '0', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '3.636424', '0.19530867', '', '', ''], ['LP002487', 'Male', 'Yes', '0', 'Graduate', 'No', '3015', '2188', '153', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.824527', '-6.101728', '', '', ''], ['LP001384', 'Male', 'Yes', '3+', 'Not Graduate', 'No', '2071', '754', '94', '480', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '5.17407', '0.4433775', '', '', ''], ['LP002054', 'Male', 'Yes', '2', 'Not Graduate', 'No', '3601', '1590', '128', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '7.63403', '-0.26675516', '', '', ''], ['LP001491', 'Male', 'Yes', '2', 'Graduate', 'Yes', '3316', '3500', '88', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '5.1719775', '2.834788', '', '', ''], ['LP002178', 'Male', 'Yes', '0', 'Graduate', 'No', '3013', '3033', '95', '300', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.493936', '16.145895', '', '', ''], ['LP001699', 'Male', 'No', '0', 'Graduate', 'No', '2479', '0', '59', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.600547', '16.17873', '', '', ''], ['LP001349', 'Male', 'No', '0', 'Graduate', 'No', '4843', '3806', '151', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.609459', '4.7679663', '', '', ''], ['LP001778', 'Male', 'Yes', '1', 'Graduate', 'No', '3155', '1779', '140', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '0.7743193', '-1.0441396', '', '', ''], ['LP001636', 'Male', 'Yes', '0', 'Graduate', 'No', '4600', '0', '73', '180', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.597342', '4.7378454', '', '', ''], ['LP002401', 'Male', 'Yes', '0', 'Graduate', 'No', '2213', '1125', '128', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.055383', '16.235455', '', '', ''], ['LP002170', 'Male', 'Yes', '2', 'Graduate', 'No', '5000', '3667', '236', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '3.6319783', '0.16652544', '', '', ''], ['LP001760', 'Male', '', '', 'Graduate', 'No', '4758', '0', '158', '480', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.607328', '4.518219', '', '', ''], ['LP001953', 'Male', 'Yes', '1', 'Graduate', 'No', '6875', '0', '200', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '0.79294795', '-1.0096648', '', '', ''], ['LP002634', 'Female', 'No', '1', 'Graduate', 'No', '13262', '0', '40', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.0799055', '2.207018', '', '', ''], ['LP001666', 'Male', 'No', '0', 'Graduate', 'No', '8333', '3750', '187', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '10.863831', '-5.7499285', '', '', ''], ['LP002544', 'Male', 'Yes', '1', 'Not Graduate', 'No', '1958', '2436', '131', '360', '1', 'Rural', 'N', 'Y', 'FALSE', 'FALSE', 'FALSE', 'TRUE', '6.7145195', '0.18662019', '', '', ''], ['LP001702', 'Male', 'No', '0', 'Graduate', 'No', '3418', '0', '127', '360', '1', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '-9.221058', '5.5155363', '', '', ''], ['LP002144', 'Female', 'No', '', 'Graduate', 'No', '3813', '0', '116', '180', '1', 'Urban', 'N', 'Y', 'FALSE', 'FALSE', 'FALSE', 'TRUE', '8.585197', '13.607136', '', '', ''], ['LP002979', 'Male', 'Yes', '3+', 'Graduate', 'No', '4106', '0', '40', '180', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.576104', '-4.785015', '', '', ''], ['LP001024', 'Male', 'Yes', '2', 'Graduate', 'No', '3200', '700', '70', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '5.0627356', '2.8163097', '', '', ''], ['LP001514', 'Female', 'Yes', '0', 'Graduate', 'No', '2330', '4486', '100', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '1.1469629', '-3.0437336', '', '', ''], ['LP001972', 'Male', 'Yes', '', 'Not Graduate', 'No', '2875', '1750', '105', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '5.1764593', '0.53992915', '', '', ''], ['LP002874', 'Male', 'No', '0', 'Graduate', 'No', '3229', '2739', '110', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.3227825', '16.311182', '', '', ''], ['LP001519', 'Female', 'No', '0', 'Graduate', 'No', '10000', '1666', '225', '360', '1', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '10.516582', '-3.6172156', '', '', ''], ['LP002328', 'Male', 'Yes', '0', 'Not Graduate', 'No', '6096', '0', '218', '360', '0', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '7.116271', '-1.143201', '', '', ''], ['LP002467', 'Male', 'Yes', '0', 'Graduate', 'No', '3708', '2569', '173', '360', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '9.932244', '15.795142', '', '', ''], ['LP002953', 'Male', 'Yes', '3+', 'Graduate', 'No', '5703', '0', '128', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.591244', '14.993416', '', '', ''], ['LP001194', 'Male', 'Yes', '2', 'Graduate', 'No', '2708', '1167', '97', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '3.8588185', '0.16811', '', '', ''], ['LP001267', 'Female', 'Yes', '2', 'Graduate', 'No', '1378', '1881', '167', '360', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '5.8561864', '2.9778955', '', '', ''], ['LP001385', 'Male', 'No', '0', 'Graduate', 'No', '5316', '0', '136', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.745702', '15.696588', '', '', ''], ['LP002755', 'Male', 'Yes', '1', 'Not Graduate', 'No', '2239', '2524', '128', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '6.3562517', '0.52608716', '', '', ''], ['LP002050', 'Male', 'Yes', '1', 'Graduate', 'Yes', '10000', '0', '155', '360', '1', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '9.04238', '0.47018188', '', '', ''], ['LP002777', 'Male', 'Yes', '0', 'Graduate', 'No', '2785', '2016', '110', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.808869', '-5.1177926', '', '', ''], ['LP001473', 'Male', 'No', '0', 'Graduate', 'No', '2014', '1929', '74', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.482172', '16.286493', '', '', ''], ['LP001691', 'Male', 'Yes', '2', 'Not Graduate', 'No', '3917', '0', '124', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '4.808858', '0.68138087', '', '', ''], ['LP001091', 'Male', 'Yes', '1', 'Graduate', '', '4166', '3369', '201', '360', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '9.603836', '1.6264609', '', '', ''], ['LP002841', 'Male', 'Yes', '0', 'Graduate', 'No', '3166', '2064', '104', '360', '0', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '9.620989', '16.214838', '', '', ''], ['LP002448', 'Male', 'Yes', '0', 'Graduate', 'No', '3948', '1733', '149', '360', '0', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '11.507211', '-5.1359577', '', '', ''], ['LP002776', 'Female', 'No', '0', 'Graduate', 'No', '5000', '0', '103', '360', '0', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '1.6772075', '-3.2109606', '', '', ''], ['LP002444', 'Male', 'No', '1', 'Not Graduate', 'Yes', '2769', '1542', '190', '360', '1', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '5.558923', '0.38890406', '', '', ''], ['LP001708', 'Female', 'No', '0', 'Graduate', 'No', '10000', '0', '214', '360', '1', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '1.6410077', '-3.1367152', '', '', ''], ['LP001964', 'Male', 'Yes', '0', 'Not Graduate', 'No', '1800', '2934', '93', '360', '0', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '6.409582', '1.3654047', '', '', ''], ['LP002684', 'Female', 'No', '0', 'Not Graduate', 'No', '3400', '0', '95', '360', '1', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '6.1870794', '-1.0491276', '', '', ''], ['LP001243', 'Male', 'Yes', '0', 'Graduate', 'No', '3208', '3066', '172', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.10162', '16.059126', '', '', ''], ['LP001532', 'Male', 'Yes', '2', 'Not Graduate', 'No', '2281', '0', '113', '360', '1', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '7.6150837', '-0.23353384', '', '', ''], ['LP001256', 'Male', 'No', '0', 'Graduate', 'No', '3750', '4750', '176', '360', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '9.082797', '16.185865', '', '', ''], ['LP001713', 'Male', 'Yes', '1', 'Graduate', 'Yes', '7787', '0', '240', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.38357', '1.4065316', '', '', ''], ['LP002911', 'Male', 'Yes', '1', 'Graduate', 'No', '2787', '1917', '146', '360', '0', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '8.982801', '0.69694465', '', '', ''], ['LP002892', 'Male', 'Yes', '2', 'Graduate', 'No', '6540', '0', '205', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '3.525899', '-0.24631144', '', '', ''], ['LP001536', 'Male', 'Yes', '3+', 'Graduate', 'No', '39999', '0', '600', '180', '0', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-8.781411', '5.01843', '', '', ''], ['LP001052', 'Male', 'Yes', '1', 'Graduate', '', '3717', '2925', '151', '360', '1', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '1.2228284', '-1.0654372', '', '', ''], ['LP002778', 'Male', 'Yes', '2', 'Graduate', 'Yes', '6633', '0', '128', '360', '0', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '8.459155', '-0.09652176', '', '', ''], ['LP002407', 'Female', 'Yes', '0', 'Not Graduate', 'Yes', '7142', '0', '138', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '6.0456843', '-1.0125258', '', '', ''], ['LP002266', 'Male', 'Yes', '2', 'Graduate', 'No', '3100', '1400', '113', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '5.1970468', '2.7094717', '', '', ''], ['LP002231', 'Female', 'No', '0', 'Graduate', 'No', '6000', '0', '156', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.462692', '13.350112', '', '', ''], ['LP001087', 'Female', 'No', '2', 'Graduate', '', '3750', '2083', '120', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '1.7009231', '-2.576326', '', '', ''], ['LP002531', 'Male', 'Yes', '1', 'Graduate', 'Yes', '16667', '2250', '86', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '1.0351496', '-1.1946552', '', '', ''], ['LP001854', 'Male', 'Yes', '3+', 'Graduate', 'No', '5250', '0', '94', '360', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '8.565091', '14.98817', '', '', ''], ['LP001657', 'Male', 'Yes', '0', 'Not Graduate', 'No', '6033', '0', '160', '360', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '6.4805303', '1.2854317', '', '', ''], ['LP002357', 'Female', 'No', '0', 'Not Graduate', 'No', '2720', '0', '80', '360', '0', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '6.716265', '1.0123081', '', '', ''], ['LP001904', 'Male', 'Yes', '0', 'Graduate', 'No', '3103', '1300', '80', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.654633', '16.147982', '', '', ''], ['LP001603', 'Male', 'Yes', '0', 'Not Graduate', 'Yes', '4344', '736', '87', '360', '1', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '5.48174', '-0.13831048', '', '', ''], ['LP001497', 'Male', 'Yes', '2', 'Graduate', 'No', '5042', '2083', '185', '360', '1', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '8.447095', '-0.18785025', '', '', ''], ['LP001263', 'Male', 'Yes', '3+', 'Graduate', 'No', '3167', '4000', '180', '300', '0', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '-8.73622', '4.959233', '', '', ''], ['LP001266', 'Male', 'Yes', '1', 'Graduate', 'Yes', '2395', '0', '128', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '0.9102418', '-1.1642158', '', '', ''], ['LP002622', 'Male', 'Yes', '2', 'Graduate', 'No', '3510', '4416', '243', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.430706', '-0.16788375', '', '', ''], ['LP001213', 'Male', 'Yes', '1', 'Graduate', 'No', '4945', '0', '128', '360', '0', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '9.005819', '0.49934348', '', '', ''], ['LP002277', 'Female', 'No', '0', 'Graduate', 'No', '3180', '0', '71', '360', '0', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '8.570044', '13.385723', '', '', ''], ['LP001248', 'Male', 'No', '0', 'Graduate', 'No', '3500', '0', '81', '300', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.560107', '4.673706', '', '', ''], ['LP002505', 'Male', 'Yes', '0', 'Graduate', 'No', '4333', '2451', '110', '360', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '9.812644', '15.557929', '', '', ''], ['LP002868', 'Male', 'Yes', '2', 'Graduate', 'No', '3159', '461', '108', '84', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '4.959294', '2.8019183', '', '', ''], ['LP002863', 'Male', 'Yes', '3+', 'Graduate', 'No', '6406', '0', '150', '360', '1', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '-8.82028', '5.0156846', '', '', ''], ['LP002840', 'Female', 'No', '0', 'Graduate', 'No', '2378', '0', '9', '360', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '8.685527', '13.343055', '', '', ''], ['LP001357', 'Male', '', '', 'Graduate', 'No', '3816', '754', '160', '360', '1', 'Urban', 'N', 'Y', 'FALSE', 'FALSE', 'FALSE', 'TRUE', '9.2318', '14.900086', '', '', ''], ['LP002082', 'Male', 'Yes', '0', 'Graduate', 'Yes', '5818', '2160', '184', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-10.436089', '6.055231', '', '', ''], ['LP002842', 'Male', 'Yes', '1', 'Graduate', 'No', '3417', '1750', '186', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.588966', '1.4927702', '', '', ''], ['LP002926', 'Male', 'Yes', '2', 'Graduate', 'Yes', '2726', '0', '106', '360', '0', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '3.576711', '0.19877364', '', '', ''], ['LP001013', 'Male', 'Yes', '0', 'Not Graduate', 'No', '2333', '1516', '95', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '6.574508', '1.354184', '', '', ''], ['LP001922', 'Male', 'Yes', '0', 'Graduate', 'No', '20667', '0', '128', '360', '1', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '11.846542', '-5.1741214', '', '', ''], ['LP001488', 'Male', 'Yes', '3+', 'Graduate', 'No', '4000', '7750', '290', '360', '1', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '-8.705219', '4.9955626', '', '', ''], ['LP002379', 'Male', 'No', '0', 'Graduate', 'No', '6500', '0', '105', '360', '0', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '11.654956', '-5.1530614', '', '', ''], ['LP001835', 'Male', 'Yes', '0', 'Not Graduate', 'No', '1668', '3890', '201', '360', '0', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '5.5000234', '-0.1269945', '', '', ''], ['LP002190', 'Male', 'Yes', '1', 'Graduate', 'No', '6325', '0', '175', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '1.2123468', '-1.2955328', '', '', ''], ['LP002798', 'Male', 'Yes', '0', 'Graduate', 'No', '3887', '2669', '162', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.207892', '5.5633883', '', '', ''], ['LP001608', 'Male', 'Yes', '2', 'Graduate', 'No', '2045', '1619', '101', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.352417', '0.03178916', '', '', ''], ['LP002522', 'Female', 'No', '0', 'Graduate', 'Yes', '2500', '0', '93', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.724933', '13.279907', '', '', ''], ['LP001280', 'Male', 'Yes', '2', 'Not Graduate', 'No', '3333', '2000', '99', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '4.8646107', '0.6442679', '', '', ''], ['LP001634', 'Male', 'No', '0', 'Graduate', 'No', '1916', '5063', '67', '360', '1', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '10.903296', '-5.813525', '', '', ''], ['LP001546', 'Male', 'No', '0', 'Graduate', '', '2980', '2083', '120', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '10.935734', '-5.4006543', '', '', ''], ['LP001914', 'Male', 'Yes', '0', 'Graduate', 'No', '3927', '800', '112', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.547109', '4.811899', '', '', ''], ['LP001900', 'Male', 'Yes', '1', 'Graduate', 'No', '2750', '1842', '115', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '0.8924451', '-1.4015678', '', '', ''], ['LP002940', 'Male', 'No', '0', 'Not Graduate', 'No', '3833', '0', '110', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '6.842556', '-1.0054803', '', '', ''], ['LP001644', '', 'Yes', '0', 'Graduate', 'Yes', '674', '5296', '168', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.040782', '-4.939212', '', '', ''], ['LP001865', 'Male', 'Yes', '1', 'Graduate', 'No', '6083', '4250', '330', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.523763', '1.427355', '', '', ''], ['LP002446', 'Male', 'Yes', '2', 'Not Graduate', 'No', '2309', '1255', '125', '360', '0', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '7.6779156', '-0.25790837', '', '', ''], ['LP002366', 'Male', 'Yes', '0', 'Graduate', 'No', '2666', '4300', '121', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.549175', '-5.154932', '', '', ''], ['LP001250', 'Male', 'Yes', '3+', 'Not Graduate', 'No', '4755', '0', '95', '360', '0', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '5.0314784', '0.36047637', '', '', ''], ['LP001116', 'Male', 'No', '0', 'Not Graduate', 'No', '3748', '1668', '110', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '5.5187917', '-0.12703846', '', '', ''], ['LP002337', 'Female', 'No', '0', 'Graduate', 'No', '2995', '0', '60', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.51562', '13.375529', '', '', ''], ['LP001790', 'Female', 'No', '1', 'Graduate', 'No', '3812', '0', '112', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '10.065261', '-3.5501282', '', '', ''], ['LP001228', 'Male', 'No', '0', 'Not Graduate', 'No', '3200', '2254', '126', '180', '0', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '6.5734997', '1.3294501', '', '', ''], ['LP001926', 'Male', 'Yes', '0', 'Graduate', 'No', '3704', '2000', '120', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.844421', '-5.208227', '', '', ''], ['LP001784', 'Male', 'Yes', '1', 'Graduate', 'No', '5500', '1260', '170', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.783634', '0.5323234', '', '', ''], ['LP001123', 'Male', 'Yes', '0', 'Graduate', 'No', '2400', '0', '75', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.903261', '16.197344', '', '', ''], ['LP002284', 'Male', 'No', '0', 'Not Graduate', 'No', '3902', '1666', '109', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '6.801419', '-1.0220042', '', '', ''], ['LP001205', 'Male', 'Yes', '0', 'Graduate', 'No', '2500', '3796', '120', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.517887', '16.141018', '', '', ''], ['LP001421', 'Male', 'Yes', '0', 'Graduate', 'No', '5568', '2142', '175', '360', '1', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '11.668917', '-5.1278276', '', '', ''], ['LP001768', 'Male', 'Yes', '0', 'Graduate', '', '3716', '0', '42', '180', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.244124', '-5.291232', '', '', ''], ['LP002006', 'Female', 'No', '0', 'Graduate', 'No', '2507', '0', '56', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '10.557868', '-3.688759', '', '', ''], ['LP001824', 'Male', 'Yes', '1', 'Graduate', 'No', '2882', '1843', '123', '480', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '0.91395974', '-1.1636969', '', '', ''], ['LP001027', 'Male', 'Yes', '2', 'Graduate', '', '2500', '1840', '109', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '5.188854', '2.737895', '', '', ''], ['LP002101', 'Male', 'Yes', '0', 'Graduate', '', '63337', '0', '490', '180', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.892978', '15.896221', '', '', ''], ['LP001273', 'Male', 'Yes', '0', 'Graduate', 'No', '6000', '2250', '265', '360', '1', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '-9.510146', '4.755487', '', '', ''], ['LP001316', 'Male', 'Yes', '0', 'Graduate', 'No', '2958', '2900', '131', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.350079', '5.829333', '', '', ''], ['LP001758', 'Male', 'Yes', '2', 'Graduate', 'No', '6250', '1695', '210', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '3.6589475', '0.16113308', '', '', ''], ['LP002537', 'Male', 'Yes', '0', 'Graduate', 'No', '2083', '3150', '128', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '-9.324761', '5.6467786', '', '', ''], ['LP002493', 'Male', 'No', '0', 'Graduate', 'No', '4166', '0', '98', '360', '0', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '-9.280809', '5.5730343', '', '', ''], ['LP002191', 'Male', 'Yes', '0', 'Graduate', 'No', '19730', '5266', '570', '360', '1', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '11.561055', '-5.0811586', '', '', ''], ['LP001264', 'Male', 'Yes', '3+', 'Not Graduate', 'Yes', '3333', '2166', '130', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '5.282916', '0.44110385', '', '', ''], ['LP001050', '', 'Yes', '2', 'Not Graduate', 'No', '3365', '1917', '112', '360', '0', 'Rural', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '7.620717', '-0.30455488', '', '', ''], ['LP001639', 'Female', 'Yes', '0', 'Graduate', 'No', '3625', '0', '108', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '1.576309', '-3.253202', '', '', ''], ['LP001935', 'Male', 'No', '0', 'Graduate', 'No', '9508', '0', '187', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.52294', '-5.198623', '', '', ''], ['LP002706', 'Male', 'Yes', '1', 'Not Graduate', 'No', '5285', '1430', '161', '360', '0', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '5.539717', '0.66289204', '', '', ''], ['LP002862', 'Male', 'Yes', '2', 'Not Graduate', 'No', '6125', '1625', '187', '480', '1', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '4.873447', '0.6825689', '', '', ''], ['LP002369', 'Male', 'Yes', '0', 'Graduate', 'No', '2920', '16.12000084', '87', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.776616', '-5.20187', '', '', ''], ['LP001574', 'Male', 'Yes', '0', 'Graduate', 'No', '3707', '3166', '182', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.819018', '-5.2724714', '', '', ''], ['LP002319', 'Male', 'Yes', '0', 'Graduate', '', '6256', '0', '160', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.034248', '16.253399', '', '', ''], ['LP002699', 'Male', 'Yes', '2', 'Graduate', 'Yes', '17500', '0', '400', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.513379', '-0.2628294', '', '', ''], ['LP001020', 'Male', 'Yes', '1', 'Graduate', 'No', '12841', '10968', '349', '360', '1', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '1.1629182', '-1.3521655', '', '', ''], ['LP002175', 'Male', 'Yes', '0', 'Graduate', 'No', '4750', '2333', '130', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.540098', '16.184986', '', '', ''], ['LP002555', 'Male', 'Yes', '2', 'Graduate', 'Yes', '4583', '2083', '160', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '3.6163251', '0.17667966', '', '', ''], ['LP002367', 'Female', 'No', '1', 'Not Graduate', 'No', '4606', '0', '81', '360', '1', 'Rural', 'N', 'N', 'FALSE', 'TRUE', 'FALSE', 'FALSE', '6.2444816', '-1.0265626', '', '', ''], ['LP002949', 'Female', 'No', '3+', 'Graduate', '', '416', '41667', '350', '180', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '8.435276', '13.627169', '', '', ''], ['LP002234', 'Male', 'No', '0', 'Graduate', 'Yes', '7167', '0', '128', '360', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '8.935486', '16.180456', '', '', ''], ['LP001275', 'Male', 'Yes', '1', 'Graduate', 'No', '3988', '0', '50', '240', '1', 'Urban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '9.176433', '1.4416572', '', '', ''], ['LP001875', 'Male', 'No', '0', 'Graduate', 'No', '4095', '3447', '151', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.044558', '-5.2163196', '', '', ''], ['LP001673', 'Male', 'No', '0', 'Graduate', 'Yes', '11000', '0', '83', '360', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '9.539905', '16.253998', '', '', ''], ['LP002945', 'Male', 'Yes', '0', 'Graduate', 'Yes', '9963', '0', '180', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '11.420063', '-5.173141', '', '', ''], ['LP002732', 'Male', 'No', '0', 'Not Graduate', '', '2550', '2042', '126', '360', '1', 'Rural', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '6.8354597', '-0.9967712', '', '', ''], ['LP002502', 'Female', 'Yes', '2', 'Not Graduate', '', '210', '2917', '98', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '5.0575914', '-0.8295076', '', '', ''], ['LP002894', 'Female', 'Yes', '0', 'Graduate', 'No', '3166', '0', '36', '360', '1', 'Semiurban', 'Y', 'Y', 'TRUE', 'FALSE', 'FALSE', 'FALSE', '1.74667', '-3.5031903', '', '', ''], ['LP001938', 'Male', 'Yes', '2', 'Graduate', 'No', '4400', '0', '127', '360', '0', 'Semiurban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '3.7468948', '0.15266795', '', '', ''], ['LP001255', 'Male', 'No', '0', 'Graduate', 'No', '3750', '0', '113', '480', '1', 'Urban', 'Y', 'N', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '9.294465', '16.314945', '', '', '']]
 

        function dataRead(data) {
            let headers1 = data[0]
            let result = []
            
            for (var row = 1; row < data.length; row++) {

                var dataObj = {}
                for (let i = 0; i < headers1.length ; i++)
                    dataObj[headers1[i]] = data[row][i];
                
                result.push(dataObj)
            }
//             console.log(result);
            return result;
        }

    
        var filterData = function (d) {
            return d.map(function (d1) {
                return {
                    Pred_True_Neg: d1.Pred_True_Neg,
                    Pred_True_Pos: d1.Pred_True_Pos,
                    Pred_False_Pos: d1.Pred_False_Pos,
                    Pred_False_Neg: d1.Pred_False_Neg
                }
            });
        }

        function dataParse(d) {
            let data = filterData(d);

            
            for (let i = 0; i < data.length; i++) {

                if (data[i].Pred_True_Neg == 'TRUE')
                    counter.TN_Count++;
                if (data[i].Pred_False_Pos == 'TRUE')
                    counter.FP_Count++;
                if (data[i].Pred_True_Pos == 'TRUE')
                    counter.TP_Count++;
                if (data[i].Pred_False_Neg == 'TRUE')
                    counter.FN_Count++;

            }

            console.log(counter)
            confustionMatrix(counter);

        }
export function loadConfusionMatrix(extendedName="") {
        let d = dataRead(data1);
        dataParse(d);
		}

        function confustionMatrix(counter) {

            var svg = d3.select("#barchart" + extendedName)
                .append("svg")
                .attr('width', width)
                .attr('height', height)
                .attr("font-family", 'san serif')

            var box1 = svg.append('rect')
                .attr("x", 150)
                .attr("y", 100)
                .attr("height", 100)
                .attr("width", 100)
                .attr("stroke", "black")
                .attr("fill", "white")

            var box2 = svg.append('rect')
                .attr("x", 250)
                .attr("y", 100)
                .attr("height", 100)
                .attr("width", 100)
                .attr("stroke", "black")
                .attr("fill", "white")

            var box3 = svg.append('rect')
                .attr("x", 150)
                .attr("y", 200)
                .attr("height", 100)
                .attr("width", 100)
                .attr("stroke", "black")
                .attr("fill", "white")

            var box4 = svg.append('rect')
                .attr("x", 250)
                .attr("y", 200)
                .attr("height", 100)
                .attr("width", 100)
                .attr("stroke", "black")
                .attr("fill", "white")

            var textActual = svg.append("text")
                .attr("x", 220)
                .attr("y", 50)
                .attr("font-size", '1.5em')
                .text("Actual")

            var textActTrue = svg.append("text")
                .attr("x", 180)
                .attr("y", 90)
                .attr("font-size", '1.2em')
                .text("True")

            var textActFalse = svg.append("text")
                .attr("x", 280)
                .attr("y", 90)
                .attr("font-size", '1.2em')
                .text("False")


            var textPredicted = svg.append("text")
                .attr("x", -40)
                .attr("y", 90)
                .attr("font-size", '1.5em')
                .text("Predicted")
                .attr("transform", "rotate(-90,100,100)")

            var textActTrue = svg.append("text")
                .attr("x", 20)
                .attr("y", 140)
                .attr("font-size", '1.2em')
                .text("Positive")
                .attr("transform", "rotate(-90,100,100)");

            var textActFalse = svg.append("text")
                .attr("x", -80)
                .attr("y", 140)
                .attr("font-size", '1.2em')
                .text("Negative")
                .attr("transform", "rotate(-90,100,100)");

            var textTP = svg.append("text")
                .attr("x", 165)
                .attr("y", 170)
                .attr("font-size", '3em')
                .text(counter.TP_Count)

            var textFP = svg.append("text")
                .attr("x", 265)
                .attr("y", 170)
                .attr("font-size", '3em')
                .text(counter.FP_Count)

            var textTN = svg.append("text")
                .attr("x", 165)
                .attr("y", 270)
                .attr("font-size", '3em')
                .text(counter.TN_Count)

            var textFN = svg.append("text")
                .attr("x", 265)
                .attr("y", 270)
                .attr("font-size", '3em')
                .text(counter.FN_Count)
        }