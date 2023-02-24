<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:250'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'min:8', 'max:120']
        ];
    }

    public function messages()
    {
        return [
            'name.required' => "Vyplňte jméno",
            'name.string' => "Neplatný formát",
            'name.max' => "Maximální počet znaků je 250",
            'email.required' => "Vyplňte email",
            'email.email' => "Neplatný formát",
            'email.unique' => "Již existuje email",
            'password.required' => "Vyplňte heslo",
            'password.min' => "Minimální počet znaků je 8",
            'password.max' => "Maximální počet znaků je 120"
        ];
    }
}
