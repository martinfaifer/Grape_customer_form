<?php

namespace App\Http\Requests;

use Illuminate\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class NewCustomerRequest extends FormRequest
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
            'name' => 'required|string|max:250',
            'surname' => ['required', 'string', 'max:250'],
            'street' => ['required', 'string', 'max:250'],
            'city' => ['required', 'string', 'max:250'],
            'post_code'  => ['nullable', 'string', 'max:250'],
            'birthday' => ['nullable', 'string', 'max:250'],
            'telephone' => ['nullable', 'string', 'max:13', 'min:9'],
            'email' => ['nullable', 'email', 'max:250'],
            'service' => ['nullable', 'string', 'max:250'],
            'note' => ['nullable', 'string'],
            'isPromo' => ['required', 'boolean']
        ];
    }

    public function messages()
    {
        return [
            'name.required' => "Vyplňte jméno",
            'name.string' => "Neplatný formát",
            'name.max' => "Maximální počet znaků je 250",
            'surname.required' => "Vyplňte příjmení",
            'surname.string' => "Neplatný formát",
            'surname.max' => "Maximální počet znaků je 250",
            'street.required' => "Vyplňte ulici s číslem popisným",
            'street.string' => "Neplatný formát",
            'street.max' => "Maximální počet znaků je 250",
            'city.required' => "Vyplňte město",
            'city.string' => "Neplatný formát",
            'city.max' => "Maximální počet znaků je 250",
            'post_code.required' => "Vyplňte směrovací číslo",
            'post_code.string' => "Neplatný formát",
            'post_code.max' => "Maximální počet znaků je 250",
            'birthday.string' => "Neplatný formát",
            'birthday.max' => "Maximální počet znaků je 250",
            'telephone.string' => "Neplatný formát",
            'telephone.min' => "Minimální počet znaků je 9",
            'telephone.max' => "Maximální počet znaků je 13",
            'email.email' => "Neplatný formát",
            'email.max' => "Maximální počet znaků je 250",
            'service.string' => "Neplatný formát",
            'service.max' => "Maximální počet znaků je 250",
            'note.string' => "Neplatný formát",
            'isPromo.required' => "Chce zákazník promo nabídku?",
            'isPromo.boolean' => "Neplatný formát"
        ];
    }
}
