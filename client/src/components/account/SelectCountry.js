import React from "react";
import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

const SelectCountry = ({ control }) => {
    return (
        <div>
            <Controller
                name="country"
                control={control}
                defaultValue=""
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="countryLabel">Country</InputLabel>
                        <Select
                            labelId="countryLabel"
                            label="Country"
                            variant="filled"
                            id="country"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            // helperText={error ? error.message : null}
                            autoWidth
                        >
                            {/* <MenuItem selected value="SPACER"></MenuItem> */}
                            <MenuItem autoFocus value="US">
                                United States
                            </MenuItem>
                            <MenuItem value="AF">Afghanistan</MenuItem>
                            <MenuItem value="AX">Åland Islands</MenuItem>
                            <MenuItem value="AL">Albania</MenuItem>
                            <MenuItem value="DZ">Algeria</MenuItem>
                            <MenuItem value="AS">American Samoa</MenuItem>
                            <MenuItem value="AD">Andorra</MenuItem>
                            <MenuItem value="AO">Angola</MenuItem>
                            <MenuItem value="AI">Anguilla</MenuItem>
                            <MenuItem value="AQ">Antarctica</MenuItem>
                            <MenuItem value="AG">
                                Antigua &amp; Barbuda
                            </MenuItem>
                            <MenuItem value="AR">Argentina</MenuItem>
                            <MenuItem value="AM">Armenia</MenuItem>
                            <MenuItem value="AW">Aruba</MenuItem>
                            <MenuItem value="AC">Ascension Island</MenuItem>
                            <MenuItem value="AU">Australia</MenuItem>
                            <MenuItem value="AT">Austria</MenuItem>
                            <MenuItem value="AZ">Azerbaijan</MenuItem>
                            <MenuItem value="BS">Bahamas</MenuItem>
                            <MenuItem value="BH">Bahrain</MenuItem>
                            <MenuItem value="BD">Bangladesh</MenuItem>
                            <MenuItem value="BB">Barbados</MenuItem>
                            <MenuItem value="BY">Belarus</MenuItem>
                            <MenuItem value="BE">Belgium</MenuItem>
                            <MenuItem value="BZ">Belize</MenuItem>
                            <MenuItem value="BJ">Benin</MenuItem>
                            <MenuItem value="BM">Bermuda</MenuItem>
                            <MenuItem value="BT">Bhutan</MenuItem>
                            <MenuItem value="BO">Bolivia</MenuItem>
                            <MenuItem value="BA">
                                Bosnia &amp; Herzegovina
                            </MenuItem>
                            <MenuItem value="BW">Botswana</MenuItem>
                            <MenuItem value="BV">Bouvet Island</MenuItem>
                            <MenuItem value="BR">Brazil</MenuItem>
                            <MenuItem value="IO">
                                British Indian Ocean Territory
                            </MenuItem>
                            <MenuItem value="VG">
                                British Virgin Islands
                            </MenuItem>
                            <MenuItem value="BN">Brunei</MenuItem>
                            <MenuItem value="BG">Bulgaria</MenuItem>
                            <MenuItem value="BF">Burkina Faso</MenuItem>
                            <MenuItem value="BI">Burundi</MenuItem>
                            <MenuItem value="KH">Cambodia</MenuItem>
                            <MenuItem value="CM">Cameroon</MenuItem>
                            <MenuItem value="CA">Canada</MenuItem>
                            <MenuItem value="CV">Cape Verde</MenuItem>
                            <MenuItem value="BQ">
                                Caribbean Netherlands
                            </MenuItem>
                            <MenuItem value="KY">Cayman Islands</MenuItem>
                            <MenuItem value="CF">
                                Central African Republic
                            </MenuItem>
                            <MenuItem value="TD">Chad</MenuItem>
                            <MenuItem value="CL">Chile</MenuItem>
                            <MenuItem value="CN">China</MenuItem>
                            <MenuItem value="CX">Christmas Island</MenuItem>
                            <MenuItem value="CC">
                                Cocos (Keeling) Islands
                            </MenuItem>
                            <MenuItem value="CO">Colombia</MenuItem>
                            <MenuItem value="KM">Comoros</MenuItem>
                            <MenuItem value="CG">Congo - Brazzaville</MenuItem>
                            <MenuItem value="CD">Congo - Kinshasa</MenuItem>
                            <MenuItem value="CK">Cook Islands</MenuItem>
                            <MenuItem value="CR">Costa Rica</MenuItem>
                            <MenuItem value="CI">Côte d’Ivoire</MenuItem>
                            <MenuItem value="HR">Croatia</MenuItem>
                            <MenuItem value="CW">Curaçao</MenuItem>
                            <MenuItem value="CY">Cyprus</MenuItem>
                            <MenuItem value="CZ">Czechia</MenuItem>
                            <MenuItem value="DK">Denmark</MenuItem>
                            <MenuItem value="DJ">Djibouti</MenuItem>
                            <MenuItem value="DM">Dominica</MenuItem>
                            <MenuItem value="DO">Dominican Republic</MenuItem>
                            <MenuItem value="EC">Ecuador</MenuItem>
                            <MenuItem value="EG">Egypt</MenuItem>
                            <MenuItem value="SV">El Salvador</MenuItem>
                            <MenuItem value="GQ">Equatorial Guinea</MenuItem>
                            <MenuItem value="ER">Eritrea</MenuItem>
                            <MenuItem value="EE">Estonia</MenuItem>
                            <MenuItem value="SZ">Eswatini</MenuItem>
                            <MenuItem value="ET">Ethiopia</MenuItem>
                            <MenuItem value="FK">
                                Falkland Islands (Islas Malvinas)
                            </MenuItem>
                            <MenuItem value="FO">Faroe Islands</MenuItem>
                            <MenuItem value="FJ">Fiji</MenuItem>
                            <MenuItem value="FI">Finland</MenuItem>
                            <MenuItem value="FR">France</MenuItem>
                            <MenuItem value="GF">French Guiana</MenuItem>
                            <MenuItem value="PF">French Polynesia</MenuItem>
                            <MenuItem value="TF">
                                French Southern Territories
                            </MenuItem>
                            <MenuItem value="GA">Gabon</MenuItem>
                            <MenuItem value="GM">Gambia</MenuItem>
                            <MenuItem value="GE">Georgia</MenuItem>
                            <MenuItem value="DE">Germany</MenuItem>
                            <MenuItem value="GH">Ghana</MenuItem>
                            <MenuItem value="GI">Gibraltar</MenuItem>
                            <MenuItem value="GR">Greece</MenuItem>
                            <MenuItem value="GL">Greenland</MenuItem>
                            <MenuItem value="GD">Grenada</MenuItem>
                            <MenuItem value="GP">Guadeloupe</MenuItem>
                            <MenuItem value="GU">Guam</MenuItem>
                            <MenuItem value="GT">Guatemala</MenuItem>
                            <MenuItem value="GG">Guernsey</MenuItem>
                            <MenuItem value="GN">Guinea</MenuItem>
                            <MenuItem value="GW">Guinea-Bissau</MenuItem>
                            <MenuItem value="GY">Guyana</MenuItem>
                            <MenuItem value="HT">Haiti</MenuItem>
                            <MenuItem value="HM">
                                Heard &amp; McDonald Islands
                            </MenuItem>
                            <MenuItem value="HN">Honduras</MenuItem>
                            <MenuItem value="HK">Hong Kong</MenuItem>
                            <MenuItem value="HU">Hungary</MenuItem>
                            <MenuItem value="IS">Iceland</MenuItem>
                            <MenuItem value="IN">India</MenuItem>
                            <MenuItem value="ID">Indonesia</MenuItem>
                            <MenuItem value="IR">Iran</MenuItem>
                            <MenuItem value="IQ">Iraq</MenuItem>
                            <MenuItem value="IE">Ireland</MenuItem>
                            <MenuItem value="IM">Isle of Man</MenuItem>
                            <MenuItem value="IL">Israel</MenuItem>
                            <MenuItem value="IT">Italy</MenuItem>
                            <MenuItem value="JM">Jamaica</MenuItem>
                            <MenuItem value="JP">Japan</MenuItem>
                            <MenuItem value="JE">Jersey</MenuItem>
                            <MenuItem value="JO">Jordan</MenuItem>
                            <MenuItem value="KZ">Kazakhstan</MenuItem>
                            <MenuItem value="KE">Kenya</MenuItem>
                            <MenuItem value="KI">Kiribati</MenuItem>
                            <MenuItem value="XK">Kosovo</MenuItem>
                            <MenuItem value="KW">Kuwait</MenuItem>
                            <MenuItem value="KG">Kyrgyzstan</MenuItem>
                            <MenuItem value="LA">Laos</MenuItem>
                            <MenuItem value="LV">Latvia</MenuItem>
                            <MenuItem value="LB">Lebanon</MenuItem>
                            <MenuItem value="LS">Lesotho</MenuItem>
                            <MenuItem value="LR">Liberia</MenuItem>
                            <MenuItem value="LY">Libya</MenuItem>
                            <MenuItem value="LI">Liechtenstein</MenuItem>
                            <MenuItem value="LT">Lithuania</MenuItem>
                            <MenuItem value="LU">Luxembourg</MenuItem>
                            <MenuItem value="MO">Macao</MenuItem>
                            <MenuItem value="MG">Madagascar</MenuItem>
                            <MenuItem value="MW">Malawi</MenuItem>
                            <MenuItem value="MY">Malaysia</MenuItem>
                            <MenuItem value="MV">Maldives</MenuItem>
                            <MenuItem value="ML">Mali</MenuItem>
                            <MenuItem value="MT">Malta</MenuItem>
                            <MenuItem value="MH">Marshall Islands</MenuItem>
                            <MenuItem value="MQ">Martinique</MenuItem>
                            <MenuItem value="MR">Mauritania</MenuItem>
                            <MenuItem value="MU">Mauritius</MenuItem>
                            <MenuItem value="YT">Mayotte</MenuItem>
                            <MenuItem value="MX">Mexico</MenuItem>
                            <MenuItem value="FM">Micronesia</MenuItem>
                            <MenuItem value="MD">Moldova</MenuItem>
                            <MenuItem value="MC">Monaco</MenuItem>
                            <MenuItem value="MN">Mongolia</MenuItem>
                            <MenuItem value="ME">Montenegro</MenuItem>
                            <MenuItem value="MS">Montserrat</MenuItem>
                            <MenuItem value="MA">Morocco</MenuItem>
                            <MenuItem value="MZ">Mozambique</MenuItem>
                            <MenuItem value="MM">Myanmar (Burma)</MenuItem>
                            <MenuItem value="NA">Namibia</MenuItem>
                            <MenuItem value="NR">Nauru</MenuItem>
                            <MenuItem value="NP">Nepal</MenuItem>
                            <MenuItem value="NL">Netherlands</MenuItem>
                            <MenuItem value="NC">New Caledonia</MenuItem>
                            <MenuItem value="NZ">New Zealand</MenuItem>
                            <MenuItem value="NI">Nicaragua</MenuItem>
                            <MenuItem value="NE">Niger</MenuItem>
                            <MenuItem value="NG">Nigeria</MenuItem>
                            <MenuItem value="NU">Niue</MenuItem>
                            <MenuItem value="NF">Norfolk Island</MenuItem>
                            <MenuItem value="KP">North Korea</MenuItem>
                            <MenuItem value="MK">North Macedonia</MenuItem>
                            <MenuItem value="MP">
                                Northern Mariana Islands
                            </MenuItem>
                            <MenuItem value="NO">Norway</MenuItem>
                            <MenuItem value="OM">Oman</MenuItem>
                            <MenuItem value="PK">Pakistan</MenuItem>
                            <MenuItem value="PW">Palau</MenuItem>
                            <MenuItem value="PS">Palestine</MenuItem>
                            <MenuItem value="PA">Panama</MenuItem>
                            <MenuItem value="PG">Papua New Guinea</MenuItem>
                            <MenuItem value="PY">Paraguay</MenuItem>
                            <MenuItem value="PE">Peru</MenuItem>
                            <MenuItem value="PH">Philippines</MenuItem>
                            <MenuItem value="PN">Pitcairn Islands</MenuItem>
                            <MenuItem value="PL">Poland</MenuItem>
                            <MenuItem value="PT">Portugal</MenuItem>
                            <MenuItem value="PR">Puerto Rico</MenuItem>
                            <MenuItem value="QA">Qatar</MenuItem>
                            <MenuItem value="RE">Réunion</MenuItem>
                            <MenuItem value="RO">Romania</MenuItem>
                            <MenuItem value="RU">Russia</MenuItem>
                            <MenuItem value="RW">Rwanda</MenuItem>
                            <MenuItem value="WS">Samoa</MenuItem>
                            <MenuItem value="SM">San Marino</MenuItem>
                            <MenuItem value="ST">
                                São Tomé &amp; Príncipe
                            </MenuItem>
                            <MenuItem value="SA">Saudi Arabia</MenuItem>
                            <MenuItem value="SN">Senegal</MenuItem>
                            <MenuItem value="RS">Serbia</MenuItem>
                            <MenuItem value="SC">Seychelles</MenuItem>
                            <MenuItem value="SL">Sierra Leone</MenuItem>
                            <MenuItem value="SG">Singapore</MenuItem>
                            <MenuItem value="SX">Sint Maarten</MenuItem>
                            <MenuItem value="SK">Slovakia</MenuItem>
                            <MenuItem value="SI">Slovenia</MenuItem>
                            <MenuItem value="SB">Solomon Islands</MenuItem>
                            <MenuItem value="SO">Somalia</MenuItem>
                            <MenuItem value="ZA">South Africa</MenuItem>
                            <MenuItem value="GS">
                                South Georgia &amp; South Sandwich Islands
                            </MenuItem>
                            <MenuItem value="KR">South Korea</MenuItem>
                            <MenuItem value="SS">South Sudan</MenuItem>
                            <MenuItem value="ES">Spain</MenuItem>
                            <MenuItem value="LK">Sri Lanka</MenuItem>
                            <MenuItem value="BL">St Barthélemy</MenuItem>
                            <MenuItem value="SH">St Helena</MenuItem>
                            <MenuItem value="KN">St Kitts &amp; Nevis</MenuItem>
                            <MenuItem value="LC">St Lucia</MenuItem>
                            <MenuItem value="MF">St Martin</MenuItem>
                            <MenuItem value="PM">
                                St Pierre &amp; Miquelon
                            </MenuItem>
                            <MenuItem value="VC">
                                St Vincent &amp; Grenadines
                            </MenuItem>
                            <MenuItem value="SR">Suriname</MenuItem>
                            <MenuItem value="SJ">
                                Svalbard &amp; Jan Mayen
                            </MenuItem>
                            <MenuItem value="SE">Sweden</MenuItem>
                            <MenuItem value="CH">Switzerland</MenuItem>
                            <MenuItem value="TW">Taiwan</MenuItem>
                            <MenuItem value="TJ">Tajikistan</MenuItem>
                            <MenuItem value="TZ">Tanzania</MenuItem>
                            <MenuItem value="TH">Thailand</MenuItem>
                            <MenuItem value="TL">Timor-Leste</MenuItem>
                            <MenuItem value="TG">Togo</MenuItem>
                            <MenuItem value="TK">Tokelau</MenuItem>
                            <MenuItem value="TO">Tonga</MenuItem>
                            <MenuItem value="TT">
                                Trinidad &amp; Tobago
                            </MenuItem>
                            <MenuItem value="TA">Tristan da Cunha</MenuItem>
                            <MenuItem value="TN">Tunisia</MenuItem>
                            <MenuItem value="TR">Turkey</MenuItem>
                            <MenuItem value="TM">Turkmenistan</MenuItem>
                            <MenuItem value="TC">
                                Turks &amp; Caicos Islands
                            </MenuItem>
                            <MenuItem value="TV">Tuvalu</MenuItem>
                            <MenuItem value="UG">Uganda</MenuItem>
                            <MenuItem value="UA">Ukraine</MenuItem>
                            <MenuItem value="AE">United Arab Emirates</MenuItem>
                            <MenuItem value="GB">United Kingdom</MenuItem>
                            <MenuItem value="UY">Uruguay</MenuItem>
                            <MenuItem value="UM">US Outlying Islands</MenuItem>
                            <MenuItem value="VI">US Virgin Islands</MenuItem>
                            <MenuItem value="UZ">Uzbekistan</MenuItem>
                            <MenuItem value="VU">Vanuatu</MenuItem>
                            <MenuItem value="VA">Vatican City</MenuItem>
                            <MenuItem value="VE">Venezuela</MenuItem>
                            <MenuItem value="VN">Vietnam</MenuItem>
                            <MenuItem value="WF">Wallis &amp; Futuna</MenuItem>
                            <MenuItem value="EH">Western Sahara</MenuItem>
                            <MenuItem value="YE">Yemen</MenuItem>
                            <MenuItem value="ZM">Zambia</MenuItem>
                            <MenuItem value="ZW">Zimbabwe</MenuItem>
                        </Select>
                        <FormHelperText error={true}>
                            {error ? error.message : ""}
                        </FormHelperText>
                    </FormControl>
                )}
                rules={{
                    required: "Country Required",
                }}
            ></Controller>
        </div>
    );
};

export default SelectCountry;
