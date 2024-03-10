<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function goToAdminPanel(){
        return view('admin-panel');
    }

    public function getAllProducts()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function getProductById($id){
        $product = Product::find($id);
        return response()->json($product);
    }

    public function store(Request $request){
        $request->validate([
            'name' => ['required'],
            'price' => ['required'],
            'stock' => ['required'],
            'description' => ['required'],
            'picture' => ['required', 'image'],
        ]);
        $dataProduct = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'description' => $request->description,
            'picture' => $request->picture,
        ]);
        //store image
        $picture_path = $request->file('picture');
        $pictureName = $dataProduct->id . $picture_path->getClientOriginalName();
        $picture_path->storeAs('public/ProductImage', $pictureName);
        $dataProduct->picture = 'ProductImage/' . $pictureName;
        $dataProduct->save();

        return redirect('/admin-panel');


    }

    public function update(Request $request, $id){
        $request->validate([
            'name' => ['required'],
            'price' => ['required'],
            'stock' => ['required'],
            'description' => ['required'],
            'picture' => ['required', 'image'],
        ]);

        $dataProduct = Product::find($id);

        Storage::delete('public/' . $dataProduct->picture);

        $dataProduct->update([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'description' => $request->description,
            'picture' => $request->picture,
        ]);
        //store image
        $picture_path = $request->file('picture');
        $pictureName = $id . $picture_path->getClientOriginalName();
        $picture_path->storeAs('public/ProductImage', $pictureName);
        $dataProduct->picture = 'ProductImage/' . $pictureName;
        $dataProduct->save();

        return redirect('/admin-panel');
    }

    public function delete($id){
        $dataProduct = Product::find($id);
        if($dataProduct){
            Storage::delete('/public/'.$dataProduct->picture);
        }
        Product::destroy($id);
        return redirect('/admin-panel');
    }
}
