<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;

class CustomerController extends Controller
{
    public function index(){
        $customers = Customer::orderBy('id', 'desc')->get();
        return response()->json($customers);
    }

    public function store(Request $request){
        $customers = new Customer();
        $customers->name = $request->name;
        $customers->email = $request->email;
        $customers->phone = $request->phone;
        $customers->website = $request->website;
        $customers->save();
        return response()->json([
            'success' => 'insert successfully'
        ]);
    }
    public function view($id){
        $customer = Customer::find($id);
        return response()->json([
            'customer' => $customer
        ], 200);
    }
}
