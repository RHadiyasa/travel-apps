"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatRupiah } from "@/lib/custom-utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PromoDetails = () => {
  const [onEdit, setOnEdit] = useState(false);
  const promoData = useSelector((state) => state.promoDetail.promo);
  console.log(promoData);

  const [promo, setPromo] = useState({
    title: promoData?.title || "",
    description: promoData?.description || "",
    imageUrl: promoData?.imageUrl || null,
    minimum_claim_price: promoData?.minimum_claim_price || 0,
    promo_code: promoData?.promo_code || "",
    promo_discount_price: promoData?.promo_discount_price || 0,
    terms_condition: promoData?.terms_condition || "",
  });

  if (!promoData) {
    return (
      <div className="flex items-center justify-center">
        No availble details
      </div>
    );
  }

  const handleUpdate = () => {
    setOnEdit(true);
    console.log(promo);
  };

  return (
    <div className="grid px-2">
      <Link href={`/admin-panel/promos`}>
        <div className="flex gap-2 items-center mb-4 hover:font-semibold">
          <ArrowLeftIcon size={18} className="hover:scale-110" />
          <span>Back</span>
        </div>
      </Link>
      <div className="flex gap-2">
        <img
          src={promoData.imageUrl}
          className="w-1/2"
          style={{ objectFit: "cover" }}
        />
        <div className="flex flex-col gap-4 px-6 w-full">
          {!onEdit ? (
            <div className="font-semibold py-2">{promoData.title}</div>
          ) : (
            <div>
              <label className="text-sm pl-1 font-semibold">Title</label>
              <Input
                placeholder="Title"
                value={promo.title}
                onChange={(e) => setPromo({ ...promo, title: e.target.value })}
              />
            </div>
          )}
          {!onEdit ? (
            <div className="text-sm">{promoData.description}</div>
          ) : (
            <div>
              <label className="text-sm pl-1 font-semibold">Description</label>
              <Textarea
                rows={8}
                placeholder="Description"
                className="w-full"
                value={promoData.description}
                onChange={(e) =>
                  setPromo({ ...promo, description: e.target.value })
                }
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="py-4 font-semibold">Details Promo</div>
        <div className="flex">
          <div className="w-1/3 text-sm">
            <div>Minimum Claim</div>
            <div className="font-semibold text-lg">
              {formatRupiah(promoData.minimum_claim_price)}
            </div>
          </div>
          <div className="w-1/3 text-sm">
            <div>Discount Price</div>
            <div className="font-semibold text-lg">
              {formatRupiah(promoData.promo_discount_price)}
            </div>
          </div>
          <div className="w-1/3 text-sm">
            <div>Promo Code</div>
            <div className="font-semibold text-lg">{promoData.promo_code}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-2 font-semibold">Term and Conditions</div>
        <div className="text-xs text-gray-500">{promoData.terms_condition}</div>
      </div>
      <div className="flex gap-4">
        <Button onClick={handleUpdate} className="w-full mt-4">
          {onEdit ? "Save" : "Update"}
        </Button>
        {onEdit && (
          <Button
            variant="destructive"
            onClick={() => setOnEdit(false)}
            className="w-full mt-4"
          >
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
};

export default PromoDetails;
