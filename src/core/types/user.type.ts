
export type UserModel = {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	username: string;
	mobile?: string;
	avatar?: string;
	state: string;
	score?: number;
	provider: [];
	createdAt: string;
	updatedAt: string;
	country_phone_code?: string;
	gender?: string;
	nationality?: string;
	date_of_birth?: string;
	city?: string;
	interests?: string[];
	country_name?: string;
	isSubscribed?: boolean;
	bio: string;
	occupation: string;
	programming_languages: any[];
	are_you_a_trainer: boolean;
	looking_for_job_type: string;
	certificates: any[];
	social_links: any[];
	preferred_language: string;
};
export type IUser = {
	id: number;
    first_name: string;
    fullMobileNo: string;
    email: string;
    signupDate: string;
}