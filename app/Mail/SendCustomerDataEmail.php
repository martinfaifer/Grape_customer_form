<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SendCustomerDataEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(public object $customer, public string $subjectEmail)
    {
    }

    public function build()
    {
        return $this->from("formular@grapesc.cz")
            ->markdown('SendMail')
            ->subject($this->subjectEmail);
    }
}
