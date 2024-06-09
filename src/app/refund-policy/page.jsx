import React from 'react';

function RefundCancellationPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Refund and Cancellation Policy</h2>

      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">Cancellation Policy</h3>
        <div className="p-6">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-semibold pr-4">Cancellation Process</td>
                <td>For Cancellations please contact us via the contact us link.</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Timeframe</td>
                <td>Requests received later than 7 business days prior to the end of the current service period will be treated as cancellation of services for the next service period.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">Refund Policy</h3>
        <div className="p-6">
          <ul className="list-disc list-inside mb-4">
            <li>We will try our best to create the suitable design concepts for our clients.</li>
            <li>In case any client is not completely satisfied with our products we can provide a refund.</li>
            <li>If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of payment gateway name payments refund will be made to the same account.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RefundCancellationPolicy;
