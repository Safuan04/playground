"""Definig a function nasafuand calc"""


def calc():
    """"""
    safuan_spendings = [198, 12, 10, 63, 14, 103, 50, 8, 61.5]
    khalid_spendings = [35, 12, 10, 54, 64, 39, 7, 8, 14]

    gave_to_khalid = [737]
    gave_to_safuan = [54]

    total_to_safuan = sum(safuan_spendings)/2 - sum(khalid_spendings)/2 + sum(gave_to_khalid) - sum(gave_to_safuan)
    total_to_khalid = sum(khalid_spendings)/2 - sum(safuan_spendings)/2 + sum(gave_to_safuan) - sum(gave_to_khalid)

    print(f'Safuan spent :{sum(safuan_spendings)} dh')
    print(f'Khalid spent : {sum(khalid_spendings)} dh')
    print(f'Safuan gave to khalid : {sum(gave_to_khalid)} dh')
    print(f'khalid gave to Safuan : {sum(gave_to_safuan)} dh')

    if (sum(safuan_spendings) + sum(gave_to_khalid)) > (sum(khalid_spendings) + sum(gave_to_safuan)):
        print(f'Safuan owes Khalid : {total_to_safuan} dh')
    elif (sum(safuan_spendings) + sum(gave_to_khalid)) < (sum(khalid_spendings) + sum(gave_to_safuan)):
        print(f'Khalid owes Safuan: {total_to_khalid} dh')
    elif (sum(safuan_spendings) + sum(gave_to_khalid)) == (sum(khalid_spendings) + sum(gave_to_safuan)):
        print('no one owes anyone')

calc()
