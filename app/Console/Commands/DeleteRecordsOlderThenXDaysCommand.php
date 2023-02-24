<?php

namespace App\Console\Commands;

use App\Services\Nangu\Wsdl\WsdlDeleteService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use App\Models\NanguPromoCustomer;

class DeleteRecordsOlderThenXDaysCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'records:delete';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatic records deleting if they older than x days';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $recordsToDelete = NanguPromoCustomer::where('created_at', '<=', Carbon::now()->subDays(21)->toDateTimeString())->get();

        foreach ($recordsToDelete as $record) {
            (new WsdlDeleteService())->execute($record);
        }
    }
}
